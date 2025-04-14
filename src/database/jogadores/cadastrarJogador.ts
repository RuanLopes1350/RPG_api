import { promise } from "zod";
import { db } from "../..";
import { jogadorSchema } from "../../validation/validarJogador";


export async function cadastrarJogadorSQL(
    id: string,
    nome: string,
    idade: number,
    genero: string,
    email: string,
    senha: string,
) {
    let dataCadastro = new Date().toLocaleString('pt-BR');

    const jogador = {
        id: id,
        nome: nome,
        idade: idade,
        genero: genero,
        email: email,
        senha: senha,
        dataCadastro: dataCadastro
    }
    
    let validar = jogadorSchema.safeParse(jogador)

    if (!validar.success) {
        console.log("Erro ao validar jogador:", validar.error);
        const mensagemDeErro = validar.error.errors.map((erro) => erro.message)
        throw (mensagemDeErro);
    }

    const query = `
        INSERT INTO jogadores (id, nome, idade, genero, email, senha, dataCadastro)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    return new Promise((resolve, reject) => {
        db.run(
            query,
            [id, nome, idade, genero, email, senha, dataCadastro],
            function (erro) {
                if (erro) {
                    console.error("Erro ao cadastrar jogador:", erro);
                    reject(erro);
                } else {
                    console.log(`Jogador ${nome} cadastrado com sucesso!`);
                    resolve(jogador);
                }
            }
        );
    }
    );
}