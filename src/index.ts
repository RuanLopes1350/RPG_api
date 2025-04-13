import { criarJogador } from "./utils/criarJogador";
import { Generos } from "./enum/genero";
import { customAlphabet, nanoid } from "nanoid";
import { criarPersonagem } from "./utils/criarPersonagem";
import { Racas } from "./enum/raca";
import { Classes } from "./enum/classe";
import sqlite3, { Database } from "sqlite3";
import { criarTabelaJogadores, criarTabelaPersonagens } from "./database/jogadores/criarTabelas";
import * as fs from 'fs';

const directory = './data';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true }); 
}

export const db = new sqlite3.Database('./data/RPG-Banco.db');

const customNanoid = customAlphabet("1234567890", 8)

// criarJogador(
//     1,
//     'Ruan Lopes',
//     24,
//     Generos.masculino,
//     'ruan.lopes@email.com',
//     'Senha123@',
//     new Date('2025-04-10t18:16:00'),
// )

// criarPersonagem(
//     Number(customNanoid()),
//     'Altalina',
//     Racas.elfo,
//     120,
//     40,
//     Classes.arqueiro,
//     Generos.feminino,
//     1,
// )

// criarTabelaJogadores();
// criarTabelaPersonagens();