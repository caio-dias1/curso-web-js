let aprovados = new Array('bia', 'carlos', 'antonia')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'antonia']
console.log(aprovados[0])

aprovados[3] = 'paulo' //mais comum para substituir um elemtno q ja existe
aprovados.push('caio')
console.log(aprovados.length)

aprovados[9] = 'joao'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['bia', 'carlos', 'antonia']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)