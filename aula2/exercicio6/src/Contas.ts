export abstract class ContaBancaria {
  constructor(
    protected numeroConta: number,
    protected titular: string,
    protected saldo: number
  ) {}

  abstract exibirInformacoes(): void;
  abstract sacar(valor: number): void;
  abstract depositar(valor: number): void;
}

export class ContaPJ extends ContaBancaria {
  constructor(
    numeroConta: number,
    titular: string,
    saldo: number,
    private cnpj: string
  ) {
    super(numeroConta, titular, saldo);
  }

  exibirInformacoes(): void {
    console.log("Conta PJ:");
    console.log("Número da Conta:", this.numeroConta);
    console.log("Titular:", this.titular);
    console.log("Saldo:", this.saldo);
    console.log("CNPJ:", this.cnpj);
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso. Novo saldo:", this.saldo);
    } else {
      console.log("Saldo insuficiente para o saque.");
    }
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log("Depósito realizado com sucesso. Novo saldo:", this.saldo);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }
}

export class ContaPF extends ContaBancaria {
  constructor(
    numeroConta: number,
    titular: string,
    saldo: number,
    private cpf: string
  ) {
    super(numeroConta, titular, saldo);
  }

  exibirInformacoes(): void {
    console.log("Conta PF:");
    console.log("Número da Conta:", this.numeroConta);
    console.log("Titular:", this.titular);
    console.log("Saldo:", this.saldo);
    console.log("CPF:", this.cpf);
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso. Novo saldo:", this.saldo);
    } else {
      console.log("Saldo insuficiente para o saque.");
    }
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log("Depósito realizado com sucesso. Novo saldo:", this.saldo);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }
}
