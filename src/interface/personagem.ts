import { Classes } from "../enum/classe"
import { Generos } from "../enum/genero"
import { Racas } from "../enum/raca"

export interface Personagem {
    id: number,
    nome: string,
    raca: Racas,
    idade: number,
    level: number,
    classe: Classes,
    genenro: Generos,
    jogadorId: number,
}