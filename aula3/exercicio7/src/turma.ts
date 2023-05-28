import { Turno } from "./turno";
import { Curso } from "./curso";

export class Turma {
  readonly id: number;
  descricao: string;
  turno: Turno;
  curso: Curso;

  constructor(id: number, descricao: string, turno: Turno, curso: Curso) {
    this.id = id;
    this.descricao = descricao;
    this.turno = turno;
    this.curso = curso;
  }
}
