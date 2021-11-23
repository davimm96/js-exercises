let numero = document.querySelector("#numero"),
    sub = document.querySelector("#submit"),
    res = document.querySelector("#resposta"),
    nums = []

sub.addEventListener("click", function(){
    let termo = parseInt(numero.value),
        penultimo = 0, ultimo = 1, n,x = 0
    res.innerHTML = ""
    nums = []

    //While
    if(termo <= 2)
        n = termo -1
    else {
        let count = 3
        while(count <= termo){
            n = ultimo + penultimo
            penultimo = ultimo
            ultimo = n
            //nums.push(n)
            if(parseInt(numero.value) > n){
                //res.innerHTML += n + "<br>"
                nums.push(n)
                res.innerHTML = nums
                count++
            }else {
                break
            }
        }  
    }
})