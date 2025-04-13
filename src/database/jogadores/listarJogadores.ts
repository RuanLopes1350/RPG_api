import { db } from "../..";

export async function listarTodosJogadores() {
    const query = `
        SELECT * FROM jogadores;
    `;

    return new Promise((resolve, reject) => {
        db.all(query, [], (err, linhas) => {
            if (err) {
                reject(err);
            } else {
                resolve(linhas);
            }
        })
    })
};