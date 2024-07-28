class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome eh ${this.nome}`)
    }
}

const p1 = new Pessoa('Caio')
p1.falar()

const p3 = new Pessoa('Antonia')
p3.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`meu nome eh ${nome}`)
    }
}

const p2 = pessoa('antonia')
p2.falar()