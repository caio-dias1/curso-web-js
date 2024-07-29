function divisao(x, y) {
    let res = Math.floor(x / y)
    let resto = x % y
    console.log(`O resultado da divisao entre ${x} e ${y} é ${res}.`)
    if (resto > 0) {
        console.log(`O valor restante da divisao é ${resto}`)
    }
}

divisao(10,4)