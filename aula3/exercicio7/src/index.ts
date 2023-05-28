import { Turma } from "./turma";
import { Curso } from "./curso";

class GerenciadorTurmas {
  turmas: Turma[];

  constructor() {
    this.turmas = [];
  }

  adicionarTurma(turma: Turma): void {
    this.turmas.push(turma);
  }

  removerTurma(id: number): void {
    this.turmas = this.turmas.filter((turma) => turma.id !== id);
  }

  listarTurmas(): void {
    this.turmas.forEach((turma) => {
      console.log(`ID: ${turma.id}`);
      console.log(`Descrição: ${turma.descricao}`);
      console.log(`Turno: ${turma.turno}`);
      console.log(`Curso: ${turma.curso.descricao}`);
      console.log(`Área: ${turma.curso.area}`);
      console.log("------------------------");
    });
  }
}

export default GerenciadorTurmas;

const gerenciador = new GerenciadorTurmas();
const curso1 = new Curso();
const turma1 = new Turma(1, "Turma A", Turno.Manhã, curso1);

const curso2 = new Curso("Curso de História", Area.Humanas);
const turma2 = new Turma(2, "Turma B", Turno.Tarde, curso2);

gerenciador.adicionarTurma(turma1);
gerenciador.adicionarTurma(turma2);

gerenciador.listarTurmas();

gerenciador.removerTurma(1);

gerenciador.listarTurmas();
