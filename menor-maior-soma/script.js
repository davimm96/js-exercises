let res = document.querySelector("#res"),
    sub = document.querySelector("#sub"),
    n1 = document.querySelector("#n1"),
    n2 = document.querySelector("#n2"),
    n3 = document.querySelector("#n3")

sub.addEventListener("click", function(){
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    n3 = Number(n3.value)

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


})
