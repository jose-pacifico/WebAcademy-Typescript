"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoInfantil = void 0;
const Produto_1 = require("./Produto");
class ProdutoInfantil extends Produto_1.Produto {
    constructor(nome, categoria, preco, status, faixa_etaria) {
        super(nome, categoria, preco, status);
        this._faixa_etaria = faixa_etaria;
        this.verificarFaixaEtaria();
    }
    verificarFaixaEtaria() {
        if (this._faixa_etaria > 12) {
            throw new Error("Faixa etária inválida. A faixa etária máxima para produtos infantis é 12.");
        }
    }
}
exports.ProdutoInfantil = ProdutoInfantil;
