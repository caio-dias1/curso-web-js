function triangulo(x, y, z) {
    if (x == y && x == z) {
        console.log('O triangulo é Equilatero.')
    } else if (x == y || x == z) {
        console.log('O triangulo é Isosceles.')
    } else {
        console.log('O triangulo é Escaleno')
    }
}

triangulo(3, 2, 1)