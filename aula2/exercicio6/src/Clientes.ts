import { ContaBancaria } from "./Contas";

export class Cliente {
  private contas: ContaBancaria[] = [];

  constructor(private nome: string, private idade: number) {}

  adicionarConta(conta: ContaBancaria): void {
    this.contas.push(conta);
  }

  exibirContas(): void {
    console.log(`Cliente: ${this.nome}, Idade: ${this.idade}`);
    console.log("Contas:");
    this.contas.forEach((conta) => {
      conta.exibirInformacoes();
    });
  }
}
