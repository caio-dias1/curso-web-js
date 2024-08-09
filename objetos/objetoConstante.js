// pessoa -> 123 -> {...}
const pessoa = { nome: 'caio'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 452 -> {..}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa)

pessoaConstante = Object.freeze({nome: 'Caio'})
pessoaConstante.nome = 'Jose'
console.log(pessoaConstante)