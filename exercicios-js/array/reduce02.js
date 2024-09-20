const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'caio', nota: 8.7, bolsista: true}
]

/* desafio 1: todos os alunos sao bolsista?
const des1 = alunos.map(b => b.bolsista)
const res1 = des1.every(bolsista => bolsista === true);
console.log(res1) */

//desafio 1 resp professor
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))



/* desafio 2: algum aluno é bolsista?
const res2 = des1.reduce(function(acumulador, atual)  {
    return atual === true ? acumulador + 1 : acumulador;
  })

console.log(res2)
*/

//desafio 2 profsseor
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))