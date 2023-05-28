"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPF = exports.ContaPJ = exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(numeroConta, titular, saldo) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = saldo;
    }
}
exports.ContaBancaria = ContaBancaria;
class ContaPJ extends ContaBancaria {
    constructor(numeroConta, titular, saldo, cnpj) {
        super(numeroConta, titular, saldo);
        this.cnpj = cnpj;
    }
    exibirInformacoes() {
        console.log("Conta PJ:");
        console.log("Número da Conta:", this.numeroConta);
        console.log("Titular:", this.titular);
        console.log("Saldo:", this.saldo);
        console.log("CNPJ:", this.cnpj);
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado com sucesso. Novo saldo:", this.saldo);
        }
        else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Depósito realizado com sucesso. Novo saldo:", this.saldo);
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    }
}
exports.ContaPJ = ContaPJ;
class ContaPF extends ContaBancaria {
    constructor(numeroConta, titular, saldo, cpf) {
        super(numeroConta, titular, saldo);
        this.cpf = cpf;
    }
    exibirInformacoes() {
        console.log("Conta PF:");
        console.log("Número da Conta:", this.numeroConta);
        console.log("Titular:", this.titular);
        console.log("Saldo:", this.saldo);
        console.log("CPF:", this.cpf);
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado com sucesso. Novo saldo:", this.saldo);
        }
        else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Depósito realizado com sucesso. Novo saldo:", this.saldo);
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    }
}
exports.ContaPF = ContaPF;
