import { db } from "..";

export async function criarTabelaJogadores() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS jogadores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      idade INTEGER NOT NULL,
      genero TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL,
      personagens INTEGER,
      dataCadastro TEXT NOT NULL,
      FOREIGN KEY (personagens) REFERENCES personagens(id)    
      )
  `);
}