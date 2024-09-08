const nums = [1, 2, 3, 4, 5]

// for com proposito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triple = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
console.log(soma10)

resultado = nums.map(soma10).map(triple).map(paraDinheiro)
console.log(resultado)