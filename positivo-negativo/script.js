let res = document.querySelector("#resposta"),
    sub = document.querySelector("#submit"),
    numero = document.querySelector("#numero")

sub.addEventListener("click", function(){
    let n = numero.value
    
    if(n > 0){
        res.innerHTML = `${n} é maior que zero`
    }else if(n < 0){
        res.innerHTML = `${n} é menor que zero`
    }else {
        res.innerHTML = "Digite um valor válido"
    }
})