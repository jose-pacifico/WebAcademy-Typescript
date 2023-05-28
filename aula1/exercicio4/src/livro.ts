import { categoria } from "./categoria";

export type Livro = {
  nome: string;
  preco: string;
  categoria?: categoria;
};
