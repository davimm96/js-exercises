let div = document.querySelector("div"),
    submit = document.querySelector("#submit"),
    telefonou = document.querySelector("#telefonou"),
    local = document.querySelector("#local"),
    mora = document.querySelector("#mora"),
    divida = document.querySelector("#divida"),
    trabalhou = document.querySelector("#trabalhou"),
    resultado = 0

submit.addEventListener("click", function(){
    resultado = 0

    if(telefonou.checked){
        resultado++
    }

    if(local.checked){
        resultado++
    }

    if(mora.checked){
        resultado++
    }

    if(divida.checked){
        resultado++
    }

    if(trabalhou.checked){
        resultado++
    }

    setTimeout(function(){
        if(resultado == 2){
            div.innerHTML = "Suspeita"
        }else if(resultado == 3 || resultado == 4){
            div.innerHTML = "Cúmplice"
        }else if(resultado == 5){
            div.innerHTML = "Assassino"
        }else {
            div.innerHTML = "Inocente"
        }
    },1)
})