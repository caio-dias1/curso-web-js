const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad pro', preco: 4199, fragil: true},
    { nome: 'copo de vidro', preco: 2.99, fragil: true},
    { nome: 'copo de plastico', preco: 1.99, fragil: false}
]
 // outra resoluçao q consegui pensar
const produtosCaros =  p => p.preco >= 500
const produtosFrageis = p => p.fragil

const resultado = produtos.filter(produtosCaros).filter(produtosFrageis)
console.log(resultado)



/* Minha resoluçao
console.log(produtos.filter(function(p) {
    return p.fragil == true && p.preco > 500
}))
    */