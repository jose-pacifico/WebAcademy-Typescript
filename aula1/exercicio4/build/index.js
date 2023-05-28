"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_1 = require("./categoria");
const bibliotecas = [];
const novoLivro1 = {
    nome: "A Bela e a Fera",
    preco: "R$ 50,00",
    categoria: categoria_1.categoria.romance,
};
const novoLivro2 = {
    nome: "Harry Potter",
    preco: "R$ 70,00",
};
const novoLivro3 = {
    nome: "Bíblia",
    preco: "R$ 90,00",
    categoria: categoria_1.categoria.religioso,
};
const novaBiblioteca1 = {
    nome: "Biblioteca Central",
    bairro: "Centro",
    livros: [novoLivro1, novoLivro2, novoLivro3],
};
const novaBiblioteca2 = {
    nome: "Biblioteca Top",
    bairro: "Aleixo",
    livros: [novoLivro1],
};
bibliotecas.push(novaBiblioteca1);
bibliotecas.push(novaBiblioteca2);
bibliotecas.forEach((biblioteca) => {
    console.log(`\n A ${biblioteca.nome} localizada no bairro ${biblioteca.bairro} possui o seguinte acervo: `);
    console.log(biblioteca.livros);
});
