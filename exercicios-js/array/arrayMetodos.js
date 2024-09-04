const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() // remove last element
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() // remove first element
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

// splice tanto add e remover elementos

//add
pilotos.splice(2, 0, 'bottas', 'massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // new array (1 elemento é o indice inicial)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // a partir do 1 ate o 4(n inclui o 4)
console.log(algunsPilotos2)