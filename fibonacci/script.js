let submit = document.querySelector("#submit"),
    numero = document.querySelector("#numero"),
    res = document.querySelector("#res")

submit.addEventListener("click", function(){
    let termo = parseInt(numero.value),
    penultimo = 0, ultimo = 1, n

    //While
    if(termo <= 2)
        n = termo -1
    else {
        let count = 3
        while(count <= termo){
            n = ultimo + penultimo
            penultimo = ultimo
            ultimo = n
            res.innerHTML += n + "<br>"
            count++
        }  
    }

      /*
    //For
    if(termo <= 2)
        n = termo -1
    else{
        for(let count = 3; count <= termo; count++){
            n = ultimo + penultimo
            penultimo = ultimo
            ultimo = n
        }
        res.innerHTML = n
    }*/
})