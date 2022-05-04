     //CLASSE ABSTRATA - Não deve ser instanciada diretamente

import { Cliente } from "../Cliente.js";

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta){
            throw new Error('Você não pode instaciar um objeto do tipo Conta Diretamente pois essa é uma classe abstrata')
            
        }
        this._agencia = agencia;        // 1º = propriedade da cc   2º = parametro
        this._cliente = cliente;
        this._saldo = saldoInicial;       
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }  

    get saldo(){
        return this._saldo;
    }
    // Método abstrato - feito para ser sempre sobescrito
    sacar(valor){
        throw new Error('O método Sacar da conta é abstrato. Deve ser subescrito')
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        throw new Error('Saldo insuficiente');
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}