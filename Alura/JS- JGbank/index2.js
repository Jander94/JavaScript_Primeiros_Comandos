import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 11111111100)
diretor.cadastrarSenha('12345')
const gerente = new Gerente('Roberta', 5000, 22222222200)
gerente.cadastrarSenha('54321')
const cliente = new Cliente('Lais', 33333333300, '123')



const gerentelogado = SistemaAutenticacao.login(gerente, '54321')
const diretorlogado = SistemaAutenticacao.login(diretor, '12345')
const clientelogado = SistemaAutenticacao.login(cliente, '123')

console.log(gerentelogado, diretorlogado)
console.log(clientelogado)