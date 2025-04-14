import { db } from "../..";

export async function listarTodosPersonagens() {
    const query = `
        SELECT * FROM personagens as P
        INNER JOIN jogadores as J
        ON P.idJogador = J.id;
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
}