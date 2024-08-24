const obj1 = {a: 1, b:2, c:3, sina() { return a + b + c}} // JSON n pode ter funcoes
console.log(JSON.stringify(obj1)) // JSON é um formato de dados(textual)

console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a": 1, "b": string, "c": true, "d": {}, "e": []}')) // atributos e textos devem estar em aspas duplas no JSON