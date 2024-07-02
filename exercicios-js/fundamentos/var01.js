{
    {
        {
            {
                var sera = 'teste'
            }
        }
    }
}
console.log(sera) // variavel fora de funcao, seu escopo se torna global

function teste() {
    var local = teste2
}
console.log(local) // variavel dentro de funcoes so fica acessivel dentro do bloco, ou seja, local