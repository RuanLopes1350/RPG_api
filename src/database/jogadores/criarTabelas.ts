import { db } from "../..";

export async function criarTabelaJogadores(): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS jogadores (
      id INTEGER PRIMARY KEY,
      nome TEXT NOT NULL,
      idade INTEGER NOT NULL,
      genero TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL,
      dataCadastro TEXT NOT NULL
    )
  `;

  return new Promise((resolve, reject) => {
    db.run(query, (error) => {
      if (error) {
        console.error("Erro ao criar tabela jogadores:", error);
        reject(error);
      } else {
        console.log("Tabela jogadores criada com sucesso.");
        resolve();
      }
    });
  }
  );
}

export async function criarTabelaPersonagens(): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS personagens (
      id INTEGER PRIMARY KEY,
      nome TEXT NOT NULL,
      raca TEXT NOT NULL,
      idade INTEGER NOT NULL,
      level INTEGER NOT NULL,
      classe TEXT NOT NULL,
      genero TEXT NOT NULL
    )
  `;

  return new Promise((resolve, reject) => {
    db.run(query, (error) => {
      if (error) {
        console.error("Erro ao criar tabela personagens:", error);
        reject(error);
      } else {
        console.log("Tabela personagens criada com sucesso.");
        resolve();
      }
    });
  }
  );
}