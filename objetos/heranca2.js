// cadeia de prototipos (prototype chain)
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: 'T'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const mercedes = {
    modelo: 'C63-AMG',
    velMax: 280
}

const honda = {
    modelo: 'City',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(mercedes, carro)
Object.setPrototypeOf(honda, carro)

console.log(mercedes, honda)

honda.aceleraMais(100)
console.log(honda.status())

mercedes.aceleraMais(290)
console.log(mercedes.status())