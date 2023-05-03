export class ContaClone {
  #saldo;
  #cliente;
  #agencia;

  constructor(saldoInicial, cliente, agencia){
      this.#saldo = saldoInicial;
      this.#cliente = cliente;
      this.#agencia = agencia;
  }

  setCliente(novoValor){
      if(novoValor instanceof Cliente){
          this.#cliente = novoValor;
      }
  }

  getCliente(){
      return this.#cliente
  }

  getSaldo(){
      return new Intl.NumberFormat('en', { style: "currency", currency: "USD" }).format(this.#saldo);
  }

  #setSaldo(valor) {
      if(valor >= 10 && valor <= 10000) {
          this.#saldo += valor;
          return `Seu novo saldo é ${this.getSaldo()}`;
      } else {
          return "Valor inválido. Somente aceitamos transações de 10 reais até 10000 reais";
      }
  }

  sacar(valor){
      let taxa = 1
      return this.#sacar(valor, taxa);
  }

  #sacar(){
      const valorSacado = taxa * valor
      if (valorSacado <= this.#saldo) {
          this.#saldo -= valorSacado;
          return valorSacado;
      }
  }

  depositar(valor){
      return this.#setSaldo(valor);
  }

  transferir(valor, conta){
      const valorSacado = this.sacar(valor)
      conta.depositar(valorSacado);
  }
}