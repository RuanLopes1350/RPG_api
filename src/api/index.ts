import express from 'express';
import { jogadores } from '../database/jogadores';
import { customAlphabet, nanoid } from "nanoid";
import { Jogador } from '../interface/jogador';
import { cadastrarJogadorSQL } from '../database/cadastrarJogadorSQL';
const customNanoid = customAlphabet("1234567890", 8)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    console.log(req.socket.remoteAddress || null, req.method);
    res.send('Olá Mundo!');
})

app.get('/jogadores', (req, res) => {
    res.json(jogadores);
    console.log(req.socket.remoteAddress || null, req.method);
})

app.post('/jogadores', (req, res) => {
    console.log(req.socket.remoteAddress || null, req.method, req.body);
    const { nome, idade, genero, email, senha } = req.body;

    const novoJogador:Jogador = {
        id: Number(customNanoid()),
        nome,
        idade,
        genero,
        email,
        senha,
        dataCadastro: new Date(),
        personagens: [],
    }

    cadastrarJogadorSQL(
        novoJogador.id,
        novoJogador.nome,
        novoJogador.idade,
        novoJogador.genero,
        novoJogador.email,
        novoJogador.senha,
        novoJogador.dataCadastro
    )
    res.status(201).json(novoJogador);
})