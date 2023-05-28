import { Produto } from "./Produto";
import { Status } from "./Produto";

export class ProdutoInfantil extends Produto {
  private _faixa_etaria: number;

  constructor(
    nome: string,
    categoria: string,
    preco: number,
    status: Status,
    faixa_etaria: number
  ) {
    super(nome, categoria, preco, status);
    this._faixa_etaria = faixa_etaria;
    this.verificarFaixaEtaria();
  }

  private verificarFaixaEtaria(): void {
    if (this._faixa_etaria > 12) {
      throw new Error(
        "Faixa etária inválida. A faixa etária máxima para produtos infantis é 12."
      );
    }
  }
}
