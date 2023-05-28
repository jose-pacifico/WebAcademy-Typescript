export type Status = "EM_ESTOQUE" | "ESGOTADO";
export class Produto {
  protected static nextId: number = 1;
  protected codigo: number;
  protected nome: string;
  protected categoria: string;
  protected preco: number;
  protected status: Status;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this.codigo = Produto.generateId();
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.status = status;
  }

  get getCodigo(): number {
    return this.codigo;
  }
  get getNome() {
    return this.nome;
  }
  get getCategoria() {
    return this.categoria;
  }
  get getPreco() {
    return this.preco;
  }
  get getStatus() {
    return this.status;
  }
  set setNome(nome: string) {
    this.nome = nome;
  }
  set setCategoria(categoria: string) {
    this.categoria = categoria;
  }
  get setPreco() {
    return this.preco;
  }
  get setStatus() {
    return this.status;
  }

  protected static generateId(): number {
    return Produto.nextId++;
  }

  adicionar(): void {
    this.mudarStatus("EM_ESTOQUE");
    console.log(`Produto ${this.nome}, categoria:
    ${this.categoria}`);
  }
  mudarStatus(status: Status): void {
    if (status === "EM_ESTOQUE") {
      this.status = "EM_ESTOQUE";
    } else {
      this.status = "ESGOTADO";
    }
  }
}
