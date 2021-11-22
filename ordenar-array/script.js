let res = document.querySelector("#resposta"),
    ord = document.querySelector("#ordenar")

let numeros = [3,1,2,9,4,7]
res.innerHTML = numeros

ord.addEventListener("click", function(){
    res.innerHTML = numeros.sort()
})