let res = document.querySelector("#resposta"),
    sub = document.querySelector("#submit"),
    numero = document.querySelector("#numero")

sub.addEventListener("click", function(){
    let n = Number(numero.value)

    function taxaImposto(i,t){
        let salario = i - (i * t)
        return salario.toLocaleString('pt-br', {minimumFractionDigits: 2})
    }

    res.innerHTML = taxaImposto(n,0.20)
})

console.log(2000 * 0.20)