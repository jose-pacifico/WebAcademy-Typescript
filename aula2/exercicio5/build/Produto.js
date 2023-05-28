"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, categoria, preco, status) {
        this.codigo = Produto.generateId();
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }
    get getCodigo() {
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
    set setNome(nome) {
        this.nome = nome;
    }
    set setCategoria(categoria) {
        this.categoria = categoria;
    }
    get setPreco() {
        return this.preco;
    }
    get setStatus() {
        return this.status;
    }
    static generateId() {
        return Produto.nextId++;
    }
    adicionar() {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this.nome}, categoria:
    ${this.categoria}`);
    }
    mudarStatus(status) {
        if (status === "EM_ESTOQUE") {
            this.status = "EM_ESTOQUE";
        }
        else {
            this.status = "ESGOTADO";
        }
    }
}
Produto.nextId = 1;
exports.Produto = Produto;
