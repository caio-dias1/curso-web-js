function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,2,54,56,7))
console.log(soma(2, 3, 4, ' teste'))
console.log(soma('a', 'b', 'e'))