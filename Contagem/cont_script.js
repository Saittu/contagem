function cont(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passos = document.getElementById('txtp')
    let res = document.getElementById('resposta')
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        res.innerHTML = 'Não é possivel contar!'
    } else {
        res.innerHTML = 'Calculando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if(p <= 0){
            p = 1
            alert('o valor 0 é invalido! iremos considerar o passo como 1')
        }
        if(i < f){
            for(let t = i; t <= f; t += p){
            res.innerHTML += `${t} 👉`
            }
        } else {
            for(let t = i; t >= f; t -= p){
                res.innerHTML += `${t} 👉`
            }
        }
    }
    res.innerHTML += '🏁'
}