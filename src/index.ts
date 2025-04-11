import { criarJogador } from "./utils/criarJogador";
import { Generos } from "./enum/genero";
import { customAlphabet, nanoid } from "nanoid";
import { criarPersonagem } from "./utils/criarPersonagem";
import { Racas } from "./enum/raca";
import { Classes } from "./enum/classe";

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