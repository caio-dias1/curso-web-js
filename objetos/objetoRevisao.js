// coleçao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    preco: 89000,
    proprietario: {
        nome: 'Caio',
        idade: 28,
        endereço: {
            rua: 'ABC',
            cidade: 'SP'
        }
    },

    condutores: [{
        nome: 'antonia',
        idade: 26
    }, {
        nome: 'lucia',
        idade: 45
    }],
    calcularValordoSeguro: function() {
        /// ...
    }
}

console.log(carro)
carro.proprietario.numero = 17
console.log(carro)
delete carro.proprietario.numero
console.log(carro)
carro.proprietario.endereço.numero = 17
console.log(carro)
delete carro.calcularValordoSeguro
console.log(carro)