"use strict";
var categoria;
(function (categoria) {
    categoria["romance"] = "Romance";
    categoria["fantasia"] = "Fantasia";
    categoria["religioso"] = "Religioso";
})(categoria || (categoria = {}));
const livros = [];
const novoLivro1 = {
    nome: "A Bela e a Fera",
    preco: "R$ 50,00",
    categoria: categoria.romance,
};
const novoLivro2 = {
    nome: "Harry Potter",
    preco: "R$ 70,00",
};
const novoLivro3 = {
    nome: "Bíblia",
    preco: "R$ 90,00",
    categoria: categoria.religioso,
};
novoLivro1.nome = novoLivro1.nome.includes(" ")
    ? novoLivro1.nome.toLowerCase()
    : novoLivro1.nome.toUpperCase();
livros.push(novoLivro1);
livros.push(novoLivro2);
livros.push(novoLivro3);
livros.forEach((livro) => {
    livro.nome = livro.nome.includes(" ")
        ? livro.nome.toLowerCase()
        : livro.nome.toUpperCase();
});
console.log(livros);
