let valor = document.querySelector("#valor"),  //350
    submit = document.querySelector("#submit"),
    ul = document.querySelector("ul")
   

submit.addEventListener("click", function(){
    resto = Number(valor.value) //350
    console.log(resto)
    ul.innerHTML = ""
    
    while(resto >= 100){ //350 - 250 - 150 - 50
        ul.innerHTML += "<li>Nota de R$ 100</li>" //1 - 1 - 1
        resto = resto - 100 //250 - 150 - 50
    }

    while(resto >= 50){ //50 - 0
        ul.innerHTML += "<li>Nota de R$ 50</li>" //1
        resto = resto - 50 // 0
    }

    while(resto >= 20){ //0
        ul.innerHTML += "<li>Nota de R$ 20</li>"
        resto = resto - 20
    }

    while(resto >= 10){ //0
        ul.innerHTML += "<li>Nota de R$ 10</li>"
        resto = resto - 10
    }

    while(resto >= 5){ //0 
        ul.innerHTML += "<li>Nota de R$ 5</li>"
        resto = resto - 5
    }

    while(resto >= 1){ //0
        ul.innerHTML += "<li>Nota de R$ 1</li>"
        resto = resto - 1
    }

})    
