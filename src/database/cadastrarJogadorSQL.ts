import { db } from "..";

export async function cadastrarJogadorSQL(
    id: number,
    nome: string,
    idade: number,
    genero: string,
    email: string,
    senha: string,
    dataCadastro: Date
) {
    const query = `
        INSERT INTO jogadores (id, nome, idade, genero, email, senha, dataCadastro)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    return new Promise((resolve, reject) => {
        db.run(
            query,
            [id, nome, idade, genero, email, senha, dataCadastro],
            function (err) {
                if (err) {
                    console.error("Erro ao cadastrar jogador:", err);
                    reject(err);
                } else {
                    console.log("Jogador cadastrado com sucesso!");
                    resolve(this.lastID);
                }
            }
        );
    }
    );
 }