const quaseArray = { 0: 'Caio', 1: 'Antonia', 2: 'Lucia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[2])

const meuArray = ['Caio', 'Antonia', 'Lucia']
console.log(quaseArray.toString(), meuArray)