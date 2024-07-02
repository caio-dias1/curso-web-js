// armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a+ b)
}

imprimirSoma(2, 3)

// armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b // executa apenas 1 unica sentença de codigo, ou seja, funcao de apenas 1 linha.
console.log(subtracao(2, 3))

// funcao de 1 unico parametro
const imprimir2 = a => console.log(a)
imprimir2('legal!')