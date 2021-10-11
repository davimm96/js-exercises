let div = document.querySelector("div"),
    anos = document.querySelector("#anos"),
    taxa1 = document.querySelector("#taxa1"),
    taxa2 = document.querySelector("#taxa2"),
    abitantes1 = document.querySelector("#abitantes1"),
    abitantes2 = document.querySelector("#abitantes2"),
    aniciar = document.querySelector("#submit")

aniciar.addEventListener("click", function(){
    let a = parseInt(abitantes1.value),
        b = parseInt(abitantes2.value)
        tx1 = parseInt(taxa1.value),
        tx2 = parseInt(taxa2.value), x = 0,
        an = parseInt(anos.value),
        regex1 = /\D/g
    x = 0
   
    if(regex1.test(abitantes1.value)==false && regex1.test(abitantes2.value)==false && regex1.test(taxa1.value)==false && regex1.test(taxa2.value)==false && regex1.test(anos.value)==false){
        do{
            a = (a * 0.+tx1) + a
            b = (b * 0.+tx2) + b
            x += 1
        }while(x < an){
            div.innerHTML = 
                `
                    Em ${x} anos o país A chegou a ${a} abitantes e o páis B chegou a ${b} abitantes. 
                `
        }
    }else {
        div.innerHTML = "Digite valores válidos."
    }
})
