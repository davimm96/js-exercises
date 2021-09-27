let div = document.querySelector("div"),
    submit = document.querySelector("#submit"),
    n1 = document.querySelector("#n1"),
    n2 = document.querySelector("#n2"),
    n3 = document.querySelector("#n3")

submit.addEventListener("click", function(){
    let ni1 = parseInt(n1.value),
        ni2 = parseInt(n2.value),
        ni3 = parseInt(n3.value),

        regex1 = /[0123456789]/g,
        regex2 = /[0123456789]/g,
        regex3 = /[0123456789]/g,

        test1 = regex1.test(n1.value),
        test2 = regex2.test(n2.value),
        test3 = regex3.test(n3.value),

        igual = false
        div.innerHTML = ""

    if(test1 == true && test2 == true && test3 == true){ // aceita apenas números
        if(ni1 > ni2 && ni1 > ni3) { // primeiro valor é o maoir número
            div.innerHTML += `${ni1} é o maior número<br>`
        }else if(ni2 > ni1 && ni2 > ni3) {// segundo valor é o maoir número
            div.innerHTML += `${ni2} é o maior número<br>`
        }else if(ni3 > ni1 && ni3 > ni2) {// terceiro valor é o maoir número
            div.innerHTML += `${ni3} é o maior número<br>`
        }else if(ni1 == ni2 && ni1 == ni3 && ni2 == ni3) { // os valores são iguais
            div.innerHTML += "Não digite valores iguais<br>"
            igual = true //caso os valores sejam iguais não vai aparecer o menor número
        }else if(ni1 < ni2 && ni1 < ni3 && ni2 == ni3){ // segundo e terceiro valores iguais, eles são os maiores
            div.innerHTML += `${ni3} é o maior número<br>`
        }else if(ni2 < ni1 && ni2 < ni3 && ni1 == ni3){ // primeiro e terceior valores iguais, eles são os maiores
            div.innerHTML += `${ni1} é o maior número<br>`
        }else if(ni3 < ni2 && ni3 < ni1 && ni2 == ni1){ // segundo e primeiro valores iguais, eles são os maiores
            div.innerHTML += `${ni2} é o maior número<br>`
        }
        
        if(igual == false){
            if(ni1 < ni2 && ni1 < ni3) { // primeiro valor é o menor
                div.innerHTML += `${ni1} é o menor número<br>`
            }else if(ni2 < ni1 && ni2 < ni3) {// segundo valor é o menor
                div.innerHTML += `${ni2} é o menor número<br>`
            }else if(ni3 < ni1 && ni3 < ni1) {// terceiro valor é o menor
                div.innerHTML += `${ni3} é o menor número<br>`
            }else if(ni1 > ni2 && ni1 > ni3 && ni2 == ni3){ // segundo e terceiro valores iguais, eles são os menores
                div.innerHTML += `${ni3} é o menor número<br>`
            }else if(ni2 > ni1 && ni2 > ni3 && ni1 == ni3){ // primeiro e terceior valores iguais, eles são os menores
                div.innerHTML += `${ni1} é o menor número<br>`
            }else if(ni3 > ni2 && ni3 > ni1 && ni2 == ni1){ // segundo e primeiro valores iguais, eles são os menores
                div.innerHTML += `${ni2} é o menor número<br>`
            }
        }
    }else {
        div.innerHTML = "Digite valores válidos"
    }  
})