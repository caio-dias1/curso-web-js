Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad pro', preco: 4199, fragil: true},
    { nome: 'copo de vidro', preco: 2.99, fragil: true},
    { nome: 'copo de plastico', preco: 1.99, fragil: false}
]

const produtosCaros =  p => p.preco >= 500
const produtosFrageis = p => p.fragil

console.log(produtos.filter2(produtosCaros).filter2(produtosFrageis))
