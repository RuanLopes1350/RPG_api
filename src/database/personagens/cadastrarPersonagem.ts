import { error } from "console";
import { db } from "../..";
import { Jogador } from "../../interface/jogador";

export async function CadastrarPersonagem(
    id: string,
    nome: number,
    raca: string,
    idade: number,
    level: number,
    classe: string,
    genero: string) {

    let dataCadastro = new Date().toLocaleString();

    const personagem = {
        id: id,
        nome: nome,
        raca: raca,
        idade: idade,
        level: level,
        classe: classe,
        genero: genero,
        dataCadastro: dataCadastro
    }

    const query = `
            INSERT INTO personagens (id, nome, raca, idade, level, classe, genero)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;

    return new Promise((resolve, reject) => {
        db.run(
            query,
            [id, nome, raca, idade, level, classe, genero],
            function (err) {
                if (err) {
                    console.error("Erro ao cadastrar personagem:", err);
                    reject(err);
                } else {
                    console.log("Personagem cadastrado com sucesso!");
                    resolve(personagem);
                }
            }
        );
    });
}