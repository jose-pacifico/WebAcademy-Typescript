type Livro = {
  nome: string;
  preco: string;
  categoria: string;
};

const livros: Livro[] = [];

const novoLivro1: Livro = {
  nome: "Livro 1",
  preco: "R$ 50,00",
  categoria: "Romance",
};

const novoLivro2: Livro = {
  nome: "Livro 2",
  preco: "R$ 70,00",
  categoria: "Fantasia",
};

const novoLivro3: Livro = {
  nome: "Livro 3",
  preco: "R$ 90,00",
  categoria: "Religioso",
};

livros.push(novoLivro1);
livros.push(novoLivro2);
livros.push(novoLivro3);

console.log(livros);
