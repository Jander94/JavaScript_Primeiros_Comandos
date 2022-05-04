import {Cliente} from './Cliente.js'
import {ContaCorrente} from './Contas/ContaCorrente.js'
import { ContaPoupança } from './Contas/ContaPoupanca.js';
import { ContaSalario } from './Contas/contaSalario.js';

const cliente1 = new Cliente('Ricardo', 11122233300);
const ccRicardo = new ContaCorrente(cliente1, 101);
const cpRicardo = new ContaPoupança(50, cliente1, 101)
const csRicardo =  new ContaSalario(cliente1);

csRicardo.depositar(1600);
ccRicardo.depositar(500);
ccRicardo.sacar(100);

console.log(csRicardo)
console.log(cpRicardo)
console.log(ccRicardo)
console.log('Quantidade Conta Corrente: ' + ContaCorrente.NumContas)
console.log('Quantidade Conta Poupança: ' + ContaPoupança.NumContas)
console.log('Quantidade Conta Salário: ' + ContaSalario.NumContas)
