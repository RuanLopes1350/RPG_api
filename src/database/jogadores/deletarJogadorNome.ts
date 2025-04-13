import { db } from '../..';

export async function deletarJogadorNOME(nome: string) {
    const query = `
        DELETE FROM jogadores WHERE nome = ?;
    `;

    const usuario = await db.get("SELECT * FROM jogadores WHERE nome = ?", [nome]);

    if (!usuario) {
        throw new Error("Jogador não encontrado.");
    }

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