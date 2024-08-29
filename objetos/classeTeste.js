class Mercedes {
    constructor(marca = 'Mercedes') {
        this.marca = marca
    }
}

class C63 extends Mercedes {
    constructor(marca, preco = 180000 , modelo = 'C63 AMG') {
        super(marca)
        this.preco = preco
        this.modelo = modelo
    }

}

const C63AMG = new C63
console.log(C63AMG)