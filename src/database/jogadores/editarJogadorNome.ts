import { db } from "../..";
import { Generos } from "../../enum/genero";

export async function editarJogadorNOME(id: number, nome: string, idade: number, genero: Generos, email: string, senha: string) {
    const query = `
        UPDATE jogadores SET nome = ?, idade = ?, genero = ?, email = ?, senha = ? WHERE id = ?;
    `;

    return new Promise((resolve, reject) => {
        db.run(query, [nome, idade, genero, email, senha, id], function (err) {
            if (err) {
                console.error("Erro ao editar jogador:", err);
                reject(err);
            } else {
                console.log("Jogador editado com sucesso!");
                resolve(`${this.changes} jogador editado com sucesso!`);
            }
        });
    })
};