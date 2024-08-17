function aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

const aula1 = new aula('bem vindo', 123)
const aula2 = new aula('ate breve', 466)
console.log(aula1, aula2)

// simulando o operador new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'bem vindo', 123)
const aula4 = novo(aula, 'ate breve', 466)
console.log(aula3, aula4)