function aprovadoOuNao(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    } else {
        console.log('Reprovado com ' + nota)
    }
}

console.log(aprovadoOuNao(8))