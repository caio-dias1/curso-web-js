const aprovados = ['Agatha', 'Caio', 'Lucia', 'Antonia', 'Mateus']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)