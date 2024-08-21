// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'pente', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'apaga tudo'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'caio', idade: 28}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))
pessoa.nome = 'antonia'
pessoa.carro = 'tiguan'
delete pessoa.nome
console.log(pessoa)

//Object.freeze = selado + valores constantes
const carro = { marca: 'mercedes', modelo: 'c63'}
Object.freeze(carro)
console.log(carro)
carro.marca = 'porsche'
delete carro.modelo
console.log(carro)