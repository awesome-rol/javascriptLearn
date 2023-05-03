import {Conta, ContaClone} from "./Conta.js"
import {Cliente} from "./Cliente.js"

// const contaTonhao = new Conta(116000, tonhao, 116);

const rolisso = new Cliente("Rolisso", "12345");

const contaRolisso = new ContaClone(500000, rolisso, 10);

console.log(contaRolisso.getSaldo());

console.log(contaRolisso.depositar(1000));
