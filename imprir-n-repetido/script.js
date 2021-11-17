let res = document.querySelector("#resposta"),
    sub = document.querySelector("#submit"),
    numero = document.querySelector("#numero")

sub.addEventListener("click", function(){
    let num = numero.value
    res.innerHTML = ""

    for(let x = 1; x <= num; x++){
        res.innerHTML += "<br>"
        for(let z = 1; z <= x; z++)
            res.innerHTML += `${x} `
    }
        
})  