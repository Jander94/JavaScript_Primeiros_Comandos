import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    static NumContas = 0
    constructor(cliente){
        super(0, cliente, 100)
        ContaSalario.NumContas++
    }

    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}

