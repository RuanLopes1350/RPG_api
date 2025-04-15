import { db } from '../..';

export async function deletarJogadorNOME(nome: string) {
    const query = `
        DELETE FROM jogadores WHERE nome = ?;
    `;

    const buscarUsuario = `SELECT * FROM jogadores WHERE nome = ?`
    const usuario = await new Promise((resolve, reject) => {
        db.get(buscarUsuario, [nome], (erro, linha) => {
            if (erro) {
                reject(new Error(`Erro ao buscar jogador: ${erro.message}`));
            } else {
                resolve(linha);
            }
        });
    })

    if (!usuario) {
        throw new Error("Jogador não encontrado.");
    } else {
        return new Promise((resolve, reject) => {
            db.run(query, [nome], function (err) {
                if (err) {
                    console.error("Erro ao deletar jogador:", err);
                    reject(err);
                } else {
                    console.log("Jogador deletado com sucesso!");
                    resolve(`${usuario} \nDeletado com sucesso!`);
                }
            })
        })
    }
}