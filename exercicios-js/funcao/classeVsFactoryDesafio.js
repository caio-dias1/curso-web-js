/* class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome eh ${this.nome}`)
    }
} */

const Pessoa = nome => {
    return {
       fale: () => {console.log(`Meu nome é ${nome}`)}
    }
}

const p01 = Pessoa('Caio')
p01.fale()

const p02 = Pessoa('Antonia')
p02.fale()


