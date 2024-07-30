function investimentoSimples(capitalInicial, juros, tempo) {
   let res = capitalInicial * juros * tempo
    console.log(`O valor final da aplicaçao seria de R$${res}.`)
}

investimentoSimples(1000, 0.5, 5)

function investimentoComposto(capitalInicial, juros, tempo) {
   let res = capitalInicial * (juros + 1)**tempo
    console.log(`o Valor final da aplicaçao seria de R$${res}.`)
}

investimentoComposto(1000, 0.5, 5)