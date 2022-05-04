let amigo = {nome:'Jander',idade:27, peso:68,
engordar(p){
    console.log('Engordou') 
    this.peso += p}}

//console.log(`${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}kg`)
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)