export class Curso {
  descricao: string;
  area: "humanas" | "biológicas" | "exatas";

  constructor(descricao: string, area: string) {
    this.descricao = descricao;
    this.area = area;
  }
}
