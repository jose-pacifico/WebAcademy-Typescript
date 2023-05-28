"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const turma_1 = require("./turma");
const curso_1 = require("./curso");
const area_1 = require("./area");
const turno_1 = require("./turno");
class GerenciadorTurmas {
    constructor() {
        this.turmas = [];
    }
    adicionarTurma(turma) {
        this.turmas.push(turma);
    }
    removerTurma(id) {
        this.turmas = this.turmas.filter((turma) => turma.id !== id);
    }
    listarTurmas() {
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
exports.default = GerenciadorTurmas;
const gerenciador = new GerenciadorTurmas();
const curso1 = new curso_1.Curso("Curso A", area_1.Area.humanas);
const turma1 = new turma_1.Turma(1, "Turma A", turno_1.Turno.manha, curso1);
const curso2 = new curso_1.Curso("Curso de História", area_1.Area.exatas);
const turma2 = new turma_1.Turma(2, "Turma B", turno_1.Turno.tarde, curso2);
gerenciador.adicionarTurma(turma1);
gerenciador.adicionarTurma(turma2);
gerenciador.listarTurmas();
gerenciador.removerTurma(1);
gerenciador.listarTurmas();
