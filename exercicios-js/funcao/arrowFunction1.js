let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return esta implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' // possui um parametro
console.log(ola())

teste = (a, b) => (a + b) * 3

console.log(teste(2,3))