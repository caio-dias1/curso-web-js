// factory simples
function criarPessoa() {
    return {
        nome: 'caio',
        sobrenome: 'dias'
    }
}

console.log(criarPessoa())

function criarProduto(a, b) {
    return {
        nome: a,
        preco: b,
        comDesconto: b - 100
    }
}

console.log(criarProduto('carro', 500))