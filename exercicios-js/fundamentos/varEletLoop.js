/* COMO VAR N TEM ESCOPO POR BLOCO, A SAIDA SERA SEMPRE 10
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()
    */



const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()