import { db } from "../..";

export async function listarTodosPersonagens() {
    const query = `
        SELECT * FROM personagens;
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