const saudacao = 'opa' // contexto 1 lexico(local fisico do codigo onde sua variavel foi definida)

function exec() {
    const saudacao = 'falaa' // contexto lexico 2
    return saudacao
}

// objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 21,
    peso: 84,
    endereco: {
        logradouro: 'rua jose',
        numero: 29
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)