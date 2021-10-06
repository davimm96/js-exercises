let div = document.querySelector("div"),
    numero1 = document.querySelector("#numero1"),
    numero2 = document.querySelector("#numero2"),
    parImpar = document.querySelector("#par-impar"),
    inteiroDecimal = document.querySelector("#inteiro-decimal"),
    positivoNegativo = document.querySelector("#positivo-negativo")

parImpar.addEventListener("click", function(){
    let n1 = Number(numero1.value),
        n2 = Number(numero2.value)

    div.innerHTML = ""

    if(n1 % 2 == 0){
        div.innerHTML += `${n1} é Par<br>`
    }else {
        div.innerHTML += `${n1} é impar<br>`
    }

    if(n2 % 2 == 0){
        div.innerHTML += `${n2} é Par<br>`
    }else {
        div.innerHTML += `${n2} é impar<br>`
    }

})

inteiroDecimal.addEventListener("click", function(){
    let n1 = parseFloat(numero1.value),
        n2 = parseFloat(numero2.value)

    div.innerHTML = ""

    if(n1 == n1.toFixed()){
        div.innerHTML += `${n1} é inteiro<br>`
    }else {
        div.innerHTML += `${n1} é decimal<br>`
    }

    if(n2 == n2.toFixed()){
        div.innerHTML += `${n2} é inteiro<br>`
    }else {
        div.innerHTML += `${n2} é decimal<br>`
    }
})

positivoNegativo.addEventListener("click", function(){
    let n1 = parseFloat(numero1.value),
        n2 = parseFloat(numero2.value)
    
    div.innerHTML = ""
    
    if(n1 < 0){
        div.innerHTML += `${n1} é negativo<br>`
    }else {
        div.innerHTML += `${n1} é positivo<br>`
    }

    if(n2 < 0){
        div.innerHTML += `${n2} é negativo<br>`
    }else {
        div.innerHTML += `${n2} é positivo<br>`
    }
})