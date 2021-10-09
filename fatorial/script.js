let div = document.querySelector("div"),
    submit = document.querySelector("#submit"),
    numero = document.querySelector("#numero"),
    resultado = 1

submit.addEventListener("click", function(){
    numero = parseInt(numero.value)
    
    for(let x = 1; x <= numero; x++){
        resultado *= x
        div.innerHTML = resultado
    }

    //Com while
    /*
    let x = 1
    while(x <= numero){
        resultado *= x
        x++
    }

    div.innerHTML = resultado
    */
})    


//5! = 5 x 4 x 3 x 2 x 1 = 120