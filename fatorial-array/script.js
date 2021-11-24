let sub = document.querySelector("#submit"),
    res = document.querySelector("#resposta"),
    numero = document.querySelector("#numero"),
    result = 1,
    nums = []

sub.addEventListener("click", function(){
    let n = Number(numero.value)
    for(let count = 1; count <= n; count++){
        result *= count
        nums.push(result)
        res.innerHTML = nums
    }
})