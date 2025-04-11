import { criarJogador } from "./utils/criarJogador";
import { Generos } from "./enum/genero";
import { customAlphabet, nanoid } from "nanoid";

const customNanoid = customAlphabet("1234567890", 8)

criarJogador(
    Number(customNanoid()),
    'Ruan Lopes',
    24,
    Generos.masculino,
    'ruan.lopes@email.com',
    'senha123',
    new Date('2025-04-10t18:16:00'),
)