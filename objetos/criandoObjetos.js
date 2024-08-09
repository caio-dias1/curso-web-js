// usando notacao literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

obj2.nome = 'caio'
obj2.profissao = 'programador'
console.log(obj2)

// funcoes construtoras
function Produot(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produot('mouse', 299.99, 0.25)
const p2 = new Produot('cadeira gamer', 899.99, 0.10)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funcao factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30 * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('joao', 5800, 2)
const f2 = criarFuncionario('caio', 12000, 4)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Clara'
console.log(filha)

// uma funcao famosa que retorna objeto..
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)