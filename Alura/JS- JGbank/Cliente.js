export class Cliente{
    get cpf(){
        return this._cpf;        
    }
    constructor(nome, cpf, senha){
        this.nome = nome;  // 1º = propriedade da cc (cliente.nome)   2º = parametro
        this._cpf = cpf;
        this._senha = senha;
        
    }
    autenticar(){
        return true;
    }
   
}
