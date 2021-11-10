let res = document.querySelector("#res"),
    sub = document.querySelector("#sub"),
    num1 = document.querySelector("#n1"),
    num2 = document.querySelector("#n2"),
    num3 = document.querySelector("#n3")

sub.addEventListener("click", function(){
    let n1 = Number(num1.value),
        n2 = Number(num2.value),
        n3 = Number(num3.value)

    res.innerHTML = ""

    if(n1 <= 1000 && n1 >= 0 && n2 <= 1000 && n2 >= 0 && n3 <= 1000 && n3 >= 0){
        res.innerHTML = `Soma: ${n1+n2+n3}<br>`

        if(n1 > n2 && n1 > n3){
            res.innerHTML += `${n1} é o maior número<br>`
        }else if(n2 > n1 && n2 > n3){
            res.innerHTML += `${n2} é o maior número<br>`
        }else if(n3 > n1 && n3 > n2){
            res.innerHTML += `${n2} é o maior número<br>`
        }
    
        if(n1 < n2 && n1 < n3){
            res.innerHTML += `${n1} é o menor número<br>`
        }else if(n2 < n1 && n2 < n3){
            res.innerHTML += `${n2} é o menor número<br>`
        }else if(n3 < n1 && n3 < n2){
            res.innerHTML += `${n2} é o menor número<br>`
        }
    
    }else {
        res.innerHTML = "Digite valores entre 1000 e 0"
    }
    
    

})
