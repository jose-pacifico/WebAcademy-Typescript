"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.contas = [];
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    exibirContas() {
        console.log(`Cliente: ${this.nome}, Idade: ${this.idade}`);
        console.log("Contas:");
        this.contas.forEach((conta) => {
            conta.exibirInformacoes();
        });
    }
}
exports.Cliente = Cliente;
