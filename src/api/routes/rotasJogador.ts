import { Router } from "express";

import { listarTodosJogadores } from "../../database/jogadores/listarJogadores";
import { cadastrarJogadorSQL } from "../../database/jogadores/cadastrarJogador";
import { deletarJogadorNOME } from "../../database/jogadores/deletarJogadorNome";
import { deletarJogadorID } from "../../database/jogadores/deletarJogadorID";

const router = Router();

