import { ContaPJ, ContaPF } from "./Contas";
import { Cliente } from "./Clientes";

// Criando clientes
const cliente1 = new Cliente("João", 35);
const cliente2 = new Cliente("Maria", 28);

// Criando contas
const contaPJ1 = new ContaPJ(1234, "Empresa ABC", 5000, "1234567890");
const contaPF1 = new ContaPF(5678, "João Silva", 2000, "01234567890");
const contaPF2 = new ContaPF(9876, "Maria Souza", 3000, "09876543210");

// Adicionando contas aos clientes
cliente1.adicionarConta(contaPJ1);
cliente1.adicionarConta(contaPF1);
cliente2.adicionarConta(contaPF2);

// Realizando operações nas contas
contaPJ1.depositar(1000); // Depósito de R$ 1000
contaPF1.sacar(500); // Saque de R$ 500
contaPF2.depositar(200); // Depósito de R$ 200

// Exibindo informações dos clientes e suas contas
console.log("\nExibindo Contas Atualizadas\n");
cliente1.exibirContas();
console.log("-----------------------------");
cliente2.exibirContas();
