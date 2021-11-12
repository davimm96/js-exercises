let girar = document.querySelector("#girar"),
    res = document.querySelector("#res"), n=0

girar.addEventListener("click", function(){
   let num = 1
   somatorio(1000)
    function somatorio(x){
        res.innerHTML += `Tentativa: ${num++}, número sorteado: ${Math.floor(6 * Math.random() + 1)}<br>`
        if(x<=1)
            return 1
        else
            return somatorio(x-1)   
    } 
})