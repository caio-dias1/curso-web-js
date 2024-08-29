class Carro {
    constructor(marca, preco) {
        this.marca = marca
        this.preco = preco
    }
}

class Mercedes extends Carro {
    constructor(marca, preco, modelo) {
        this.marca = 'mercedes'
        this.preco = this.preco
        this.modelo = modelo
    }

}

const C63 = new Mercedes(180000, 'C63')
console.log(C63)