let valor // nao inicializado
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // deletar uma chave do objeto
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto.preco)
