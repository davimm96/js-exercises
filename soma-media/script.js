let res = document.querySelector("#res"),
    sub = document.querySelector("#sub"),
    num1 = document.querySelector("#n1"),
    num2 = document.querySelector("#n2"),
    num3 = document.querySelector("#n3")

sub.addEventListener("click", function(){
    let n1 = Number(num1.value),
        n2 = Number(num2.value),
        n3 = Number(num3.value)

    //soma
    function soma(a,b,c){
        let soma = a+b+c 
        return soma.toFixed(0)
    }

    //media
    function media(){
        let media = soma(n1,n2,n3)/3
        return media.toFixed(0)
    }

    res.innerHTML = `Soma: ${soma(n1,n2,n3)}<br>Média: ${media()}`

})