let res = document.querySelector("#resposta"),
    sub = document.querySelector("#submit"),
    numero = document.querySelector("#numero")

sub.addEventListener("click", function(){
    let n = Number(numero.value)
   
    function am(x){
        return x+12
    }

    function pm(y){
        return y-12
    }

    if(n <= 11 && n >= 0){
        res.innerHTML = am(n)+" AM"
    }else if(n <= 23 && n >= 12){
        res.innerHTML = pm(n)+" PM"
    }else {
        res.innerHTML = "Digite um valor válido"
    }
})