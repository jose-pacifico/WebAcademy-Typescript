"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./Produto");
const ProdutoInfantil_1 = require("./ProdutoInfantil");
// Cria 2 Produtos
const novoProduto = new Produto_1.Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log(novoProduto);
const novoProduto2 = new Produto_1.Produto("Condicionador", "Cabelos Cacheados", 40, "EM_ESTOQUE");
console.log(novoProduto2);
// Cria 1 Produto infantil
const novoProdutoInfantil = new ProdutoInfantil_1.ProdutoInfantil("Xampu Infantil", "Cabelos infantis", 50, "EM_ESTOQUE", 12 // - alterar a idade para forçar o erro
);
console.log(novoProdutoInfantil);
