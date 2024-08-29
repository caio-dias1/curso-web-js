class Lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 40000)
const contaDeLuz = new Lancamento('luz', -250)
const dinheiroBet = new Lancamento('bet365', 20000)

const contas = new CicloFinanceiro(8, 2024)
contas.addLancamentos(salario, contaDeLuz, dinheiroBet)
console.log(contas.sumario())