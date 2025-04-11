import { jogadores } from "../database/jogadores";
import { Classes } from "../enum/classe";
import { Racas } from "../enum/raca";
import { Generos } from "../enum/genero";
import { personagens } from "../database/personagens";
import { personagemSchema } from "../validation/validarPersonagem";

export function criarPersonagem(
    id:number,
    nome:string,
    raca:Racas,
    idade:number,
    level:number,
    classe:Classes,
    genero:Generos,
    jogadorId:number,
){
    const novoPersonagem = {
        id,
        nome,
        raca,
        idade,
        level,
        classe,
        genero,
        jogadorId
    }

    let personagemExistente = personagens.find((personagem) => personagem.nome === nome)

    if (personagemExistente) {
        throw new Error("Personagem já existe");
    }

    const validar = personagemSchema.safeParse(novoPersonagem);
    if (!validar.success){
        console.log(validar.error.format());
        throw new Error("Erro ao validar personagem");
    }

    return console.log(novoPersonagem)
}