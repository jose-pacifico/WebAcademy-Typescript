import { Livro } from "./livro";
import { categoria } from "./categoria";
import { Biblioteca } from "./biblioteca";

const bibliotecas: Biblioteca[] = [];

const novoLivro1: Livro = {
  nome: "A Bela e a Fera",
  preco: "R$ 50,00",
  categoria: categoria.romance,
};

const novoLivro2: Livro = {
  nome: "Harry Potter",
  preco: "R$ 70,00",
};

const novoLivro3: Livro = {
  nome: "Bíblia",
  preco: "R$ 90,00",
  categoria: categoria.religioso,
};

const novaBiblioteca1: Biblioteca = {
  nome: "Biblioteca Central",
  bairro: "Centro",
  livros: [novoLivro1, novoLivro2, novoLivro3],
};
const novaBiblioteca2: Biblioteca = {
  nome: "Biblioteca Top",
  bairro: "Aleixo",
  livros: [novoLivro1],
};

bibliotecas.push(novaBiblioteca1);
bibliotecas.push(novaBiblioteca2);

bibliotecas.forEach((biblioteca) => {
  console.log(
    `\n A ${biblioteca.nome} localizada no bairro ${biblioteca.bairro} possui o seguinte acervo: `
  );
  console.log(biblioteca.livros);
});
