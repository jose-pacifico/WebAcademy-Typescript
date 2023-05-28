import { Livro } from "./livro";

export type Biblioteca = {
  nome: string;
  bairro: string;
  livros: Livro[];
};
