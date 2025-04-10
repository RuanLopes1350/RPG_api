import { criarJogador } from "./utils/criarJogador";
import { Generos } from "./enum/genero";

criarJogador(
    1,
    'Ruan Lopes',
    24,
    Generos.masculino,
    'ruan.lopes@email.com',
    'senha123',
    new Date('2025-04-10t18:16:00'),
)