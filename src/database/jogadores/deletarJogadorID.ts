import { db } from '../..';

export async function deletarJogadorID(id: number) {
    const query = `
        DELETE FROM jogadores WHERE id = ?;
    `;

    const usuario = await db.get("SELECT * FROM jogadores WHERE id = ?", [id]);

    if (!usuario) {
        throw new Error("Jogador não encontrado.");
    }

    return new Promise((resolve, reject) => {
        db.run(query, [id], function (err) {
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