import { Generos } from "../enum/genero";

export interface Jogador {
    id: number,
    nome: string,
    idade: number,
    genero: Generos,
    email: string,
    senha: string,
    personagens?: number[],
    dataCadastro: string,
}