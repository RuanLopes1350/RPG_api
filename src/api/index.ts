import express from 'express';
import { customAlphabet, nanoid } from "nanoid";
import { Jogador } from '../interface/jogador';
import { cadastrarJogadorSQL } from '../database/usuarios/cadastrarJogadorSQL';
import { listarTodosJogadores } from '../database/usuarios/listarJogadores';

const customNanoid = customAlphabet("1234567890", 8)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

app.get('/jogadores', async (req, res) => {
    try {
        const jogadores = await listarTodosJogadores();
        res.json(jogadores);
    } catch (error) {
        console.error("Erro ao listar jogadores:", error);
        res.status(500).json({ error: "Erro ao listar jogadores" });
    }
})

app.post('/jogadores', async (req, res) => {
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