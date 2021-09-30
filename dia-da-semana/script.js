let submit = document.querySelector("#submit"),
    letra = document.querySelector("#letra"),
    div = document.querySelector("div"),
    dia = document.querySelectorAll(".dia")

//Mascara
letra.addEventListener("keyup", function(){
    let ltr = letra.value

    ltr = ltr + ""
    ltr = ltr.replace(/[\D089]+/g, "")

    letra.value = ltr
    if(ltr == "NaN") letra.value = ""
})


submit.addEventListener("click", function(){
    let ltr = Number(letra.value)

    switch(ltr){
        case 1: div.innerHTML = "Domingo"; break
        case 2: div.innerHTML = "Segunda"; break
        case 3: div.innerHTML = "Terça"; break
        case 4: div.innerHTML = "Quarta"; break
        case 5: div.innerHTML = "Quinta"; break
        case 6: div.innerHTML = "Sexta"; break
        case 7: div.innerHTML = "Sabado"; break
        default: div.innerHTML = "Digite um valor válido"
    }
})

let cor = "gray"
for(let x = 0; x < dia.length; x++){
    dia[x].style.color += cor;
    
    switch(x){
        case 0: cor = "blue"; break
        case 1: cor = "red"; break
        case 2: cor = "orange"; break
        case 3: cor = "yellow"; break
        case 4: cor = "green"; break
        case 5: cor = "pink"; break
    }
}
