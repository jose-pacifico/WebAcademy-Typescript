"use strict";
var categoria;
(function (categoria) {
    categoria["romance"] = "Romance";
    categoria["fantasia"] = "Fantasia";
    categoria["religioso"] = "Religioso";
})(categoria || (categoria = {}));
const livros = [];
const novoLivro1 = {
    nome: "Livro 1",
    preco: "R$ 50,00",
    categoria: categoria.romance,
};
const novoLivro2 = {
    nome: "Livro 2",
    preco: "R$ 70,00",
};
const novoLivro3 = {
    nome: "Livro 3",
    preco: "R$ 90,00",
    categoria: categoria.religioso,
};
livros.push(novoLivro1);
livros.push(novoLivro2);
livros.push(novoLivro3);
console.log(livros);
