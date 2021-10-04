let ul = document.querySelector("ul"),
    submit = document.querySelector("#submit"),
    numero = document.querySelector("#numero")

numero.addEventListener("keyup", function(){
    let n = numero.value,
        regex = /[a-z]|\W|\-|\s/g
    
    n = n + ""
    n = n.replace(regex, "")
    numero.value = n

    console.log("teste")

})

submit.addEventListener("click", function(){
    let n = numero.value,
        regex = /[0-9]/g,
        teste = regex.test(n)

    ul.innerHTML = ""

    if(teste == true){
        if(n <= 9 && n >= 0){
            ul.innerHTML += `<li>Posui ${n[0]} unidade(s)</li>`
        }else if(n <= 99){
            ul.innerHTML += `<li>Posui ${n[1]} unidade(s)</li>`
            ul.innerHTML += `<li>Posui ${n[0]} dezena(s)</li>`
        }else if(n <= 999){
            ul.innerHTML += `<li>Posui ${n[2]} unidade(s)</li>`
            ul.innerHTML += `<li>Posui ${n[1]} dezena(s)</li>`
            ul.innerHTML += `<li>Posui ${n[0]} centena(s)</li>`
        }else if(n <= 9999){
            ul.innerHTML += `<li>Posui ${n[3]} unidade(s)</li>`
            ul.innerHTML += `<li>Posui ${n[2]} dezena(s)</li>`
            ul.innerHTML += `<li>Posui ${n[1]} centena(s)</li>`
            ul.innerHTML += `<li>Posui ${n[0]} unidade(s) de milhares</li>`
        }  
    }else {
        ul.innerHTML = "Digite um valor válido"
    }
})

//117