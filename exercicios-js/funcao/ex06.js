const pontuacao = []
let recordesQuebrados = 0
let maiorPontuacao = -Infinity
let menorPontuacao = Infinity
let menorPontuacaoJogo = null
function add(x) {
    pontuacao.push(x)

    if (x > maiorPontuacao) {
        maiorPontuacao = x
        recordesQuebrados++
    }

    if (x < menorPontuacao) {
        menorPontuacao = x
        menorPontuacaoJogo = pontuacao.length
    }

    return {
        recordesQuebrados,
        maiorPontuacao,
        menorPontuacao,
        menorPontuacaoJogo,
        pontuacao
    }
}

console.log(add(18))
console.log(add(10))
console.log(add(16))
console.log(add(21))
console.log(add(31))
