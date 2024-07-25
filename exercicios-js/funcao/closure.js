// closure eh o escopo criado quando uma funcao eh declarada
// esse escopo permite a funcao de acessar e manipular variaveis externas a funcao

// contexto lexico em acao

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())