"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("ola");
var GerenciadorTurmas = /** @class */ (function () {
    function GerenciadorTurmas() {
        this.turmas = [];
    }
    GerenciadorTurmas.prototype.adicionarTurma = function (turma) {
        this.turmas.push(turma);
    };
    GerenciadorTurmas.prototype.removerTurma = function (id) {
        this.turmas = this.turmas.filter(function (turma) { return turma.id !== id; });
    };
    GerenciadorTurmas.prototype.listarTurmas = function () {
        this.turmas.forEach(function (turma) {
            console.log("ID: ".concat(turma.id));
            console.log("Descri\u00E7\u00E3o: ".concat(turma.descricao));
            console.log("Turno: ".concat(turma.turno));
            console.log("Curso: ".concat(turma.curso.descricao));
            console.log("\u00C1rea: ".concat(turma.curso.area));
            console.log("------------------------");
        });
    };
    return GerenciadorTurmas;
}());
exports.default = GerenciadorTurmas;
