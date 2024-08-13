const pessoa = {
    nome: 'rebeca',
    idade: 12,
    peso: 14
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/02/2028'
})

pessoa.dataNascimento = '01/02/2009'
console.log(pessoa.dataNascimento)
console.log(Object.entries(pessoa))


const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)
Object.freeze(obj)
obj.d = 6
console.log(obj)