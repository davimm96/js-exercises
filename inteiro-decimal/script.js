let div = document.querySelector("div"),
    submit = document.querySelector("#submit"),
    numero = document.querySelector("#numero")


submit.addEventListener("click", function(){
    let n = parseFloat(numero.value)

    if(n == n.toFixed()){
        div.innerHTML = "Inteiro"
        x = 9
    }else {
        div.innerHTML = "Decimal"
    }
})

