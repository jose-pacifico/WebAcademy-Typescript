import { Produto } from "./Produto";
import { ProdutoInfantil } from "./ProdutoInfantil";

// Cria 2 Produtos
const novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log(novoProduto);

const novoProduto2 = new Produto(
  "Condicionador",
  "Cabelos Cacheados",
  40,
  "EM_ESTOQUE"
);
console.log(novoProduto2);

// Cria 1 Produto infantil
const novoProdutoInfantil = new ProdutoInfantil(
  "Xampu Infantil",
  "Cabelos infantis",
  50,
  "EM_ESTOQUE",
  12 // - alterar a idade para forçar o erro
);
console.log(novoProdutoInfantil);
