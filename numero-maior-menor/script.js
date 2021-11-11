let res = document.querySelector("#res"),
    sub = document.querySelector("#sub"),
    num1 = document.querySelector("#n1"),
    num2 = document.querySelector("#n2"),
    num3 = document.querySelector("#n3")

sub.addEventListener("click", function(){
    let n1 = Number(num1.value),
        n2 = Number(num2.value),
        n3 = Number(num3.value)

    function maior(){
        if(n1 > n2 && n1 > n3)
            return n1
        else if(n2 > n1 && n2 > n3)
            return n2
        else if(n3 > n2 && n3 > n1)
            return n3
    }

    function menor(){
        if(n1 < n2 && n1 < n3)
            return n1
        else if(n2 < n1 && n2 < n3)
            return n2
        else if(n3 < n2 && n3 < n1)
            return n3
    }

    res.innerHTML = `Maior número: ${maior()}<br>Menor número ${menor()}`
})