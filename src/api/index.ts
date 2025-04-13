import express from 'express';
import { customAlphabet, nanoid } from "nanoid";
import { Jogador } from '../interface/jogador';
import { cadastrarJogadorSQL } from '../database/jogadores/cadastrarJogador';
import { listarTodosJogadores } from '../database/jogadores/listarJogadores';
import { listarTodosPersonagens } from '../database/personagens/listarPersonagem';
import { CadastrarPersonagem } from '../database/personagens/cadastrarPersonagem';

const customNanoid = customAlphabet("1234567890", 8)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

// JOGADORES

app.get('/jogador', async (req, res) => {
    try {
        const jogadores = await listarTodosJogadores();
        res.json(jogadores);
    } catch (error) {
        console.error("Erro ao listar jogadores:", error);
        res.status(500).json({ error: "Erro ao listar jogadores" });
    }
})

app.post('/jogador', async (req, res) => {
    const { nome, idade, genero, email, senha } = req.body;
    const id = Number(customNanoid());
    const dataCadastro = new Date().toLocaleString();
    try {
        const resultado = await cadastrarJogadorSQL(id, nome, idade, genero, email, senha, dataCadastro);
        res.status(201).json({ message: "Jogador cadastrado com sucesso", jogador: resultado });
    } catch (error) {
        console.error("Erro ao cadastrar jogador:", error);
        res.status(500).json({ error: "Erro ao cadastrar jogador" });
    }
})

// PERSONAGENS

app.post('/personagem', async (req, res) => {
    const {nome, raca, idade, level, classe, genero} = req.body;
    const id = Number(customNanoid());
    try {
        const resultado = await CadastrarPersonagem(id, nome, raca, idade, level, classe, genero);
        const personagem = {
            id: id,
            nome: nome,
            raca: raca,
            idade: idade,
            level: level,
            classe: classe,
            genero: genero
        }
        res.status(201).json({ message: "Personagem cadastrado com sucesso", personagem });
    }
    catch (error) {
        console.error("Erro ao cadastrar personagem:", error);
        res.status(500).json({ error: "Erro ao cadastrar personagem" });
    } 
})

app.get('/personagem', async (req, res) => {
    try {
        const personagens = await listarTodosPersonagens();
        res.json(personagens);
    } catch (error) {
        console.error("Erro ao listar personagens:", error);
        res.status(500).json({ error: "Erro ao listar personagens" });
    }
})