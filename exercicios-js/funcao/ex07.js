function dividePorTres(num) {
    let res = num % 3
    if (res > 0) {
        return false
    } else {
        return true
    }
}

console.log(dividePorTres(12))