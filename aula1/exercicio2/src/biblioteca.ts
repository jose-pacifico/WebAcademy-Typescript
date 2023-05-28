enum categoria {
  romance = "Romance",
  fantasia = "Fantasia",
  religioso = "Religioso",
}

type Livro = {
  nome: string;
  preco: string;
  categoria?: categoria;
};

const livros: Livro[] = [];

const novoLivro1: Livro = {
  nome: "Livro 1",
  preco: "R$ 50,00",
  categoria: categoria.romance,
};

const novoLivro2: Livro = {
  nome: "Livro 2",
  preco: "R$ 70,00",
};

const novoLivro3: Livro = {
  nome: "Livro 3",
  preco: "R$ 90,00",
  categoria: categoria.religioso,
};

livros.push(novoLivro1);
livros.push(novoLivro2);
livros.push(novoLivro3);

console.log(livros);
