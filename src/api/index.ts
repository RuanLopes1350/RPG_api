import express from 'express';
import { jogadores } from '../database/jogadores';
import { customAlphabet, nanoid } from "nanoid";
import { Jogador } from '../interface/jogador';
const customNanoid = customAlphabet("1234567890", 8)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
})

app.get('/jogadores', (req, res) => {
    res.json(jogadores);
    console.log(req.socket.remoteAddress || null, req.method);
})

app.post('/jogadores', (req, res) => {
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

    console.log(req.socket.remoteAddress || null, req.method, req.body);

    jogadores.push(novoJogador);
    res.status(201).json(novoJogador);
})