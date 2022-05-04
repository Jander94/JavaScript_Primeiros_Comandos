import { Conta } from "./Conta.js";

export class ContaPoupança extends Conta{
    static NumContas = 0 
    constructor(saldoInicial, cliente, agencia){    
        super(saldoInicial, cliente, agencia)
        ContaPoupança.NumContas++  
    }

    sacar(valor){
        const taxa = 1.02
        return this._sacar(valor, taxa)
    }

}