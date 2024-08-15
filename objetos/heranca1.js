const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const mercedes = {
    modelo: 'C63',
    velMax: 280
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(mercedes.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)