const subm1t = document.querySelector("#submit")
const num3er = document.querySelector("#number")

subm1t.addEventListener("click", function(){
    let n = parseInt(num3er.value)
    function result(x){
        return x % 2
    }
    
    if(num3er.value.length > 0){
        if(result(n) == 0){
            alert("O número é par")
        }else {
            alert("O número impar")
        }
    }else {
        alert("Digite um número")
    }
})