import { Jogador } from "../interface/jogador";
import { jogadores } from "../database/jogadores";
import { Generos } from "../enum/genero";

export function criarJogador(id: number, nome: string, idade: number, genero:Generos, email: string, senha: string,dataCadastro:Date, personagens?:number,) {
    const jogadorExistente = jogadores.find((jogador) => jogador.nome === nome);

    let novoJogador:Jogador = {
        id,
        nome,
        idade,
        genero,
        email,
        senha,
        personagens: [],
        dataCadastro,
    }

    if (jogadorExistente) {
        throw new Error("Jogador já existe");
    }

    jogadores.push(novoJogador);
    console.log('Jogador criado com sucesso');
    console.log(jogadores);
}