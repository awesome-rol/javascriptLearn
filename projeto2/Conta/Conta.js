//CLasse abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == Conta){
           throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata");
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        }
        this._cliente = novoValor;
    }

    get cliente(){
        return this.cliente
    }

    get saldo(){
        return this._saldo;
    }

    //Método abstrato
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if (valorSacado <= this._saldo) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado);
    }
}