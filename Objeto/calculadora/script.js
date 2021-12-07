let res = document.querySelector("#resposta"),
    um = document.querySelector("#um"),
    dois = document.querySelector("#dois"),
    tres = document.querySelector("#tres"),
    quatro = document.querySelector("#cinco"),
    seis = document.querySelector("#seis"),
    sete = document.querySelector("#sete"),
    oito = document.querySelector("#oito"),
    nove = document.querySelector("#nove"),
    dez = document.querySelector("#dez"),
    menos = document.querySelector("#menos"),
    mais = document.querySelector("#mais"),
    divisao = document.querySelector("#divisao"),
    vezes = document.querySelector("#vezes"),
    rDivisao = document.querySelector("#rDivisao"),
    igual = document.querySelector("#igual"),
    armazena

class Mais {
    constructor(a,b){
        this.a = a
        this.b = b
    }

    exe(){
        res.innerHTML = ""
        return this.a + this.b
    }
}

mais.addEventListener("click", function(){
    let excMais = new Mais()
})

um.addEventListener("click", function(){
    res.innerHTML += 1
    resposta += 
})

dois.addEventListener("click", function(){
    res.innerHTML += 2
})

