import { db } from "../..";

export async function deletarPersonagem(nome:string){
    const query = `
        DELETE FROM personagens WHERE nome = ?;`

    return new Promise((resolve, reject) => {
        db.run(query, [nome], function (erro) {
            if(erro) {
                console.error("Erro ao deletar personagem: ", erro)
                reject(erro)
            } else {
                console.log(`Personagem ${nome} deletado com sucesso!`)
                resolve(`Personagem ${nome} deletado com sucesso!`)
            }
        })
    })
}