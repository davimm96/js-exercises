let numero1 = document.querySelector("#numero1"),
    numero2 = document.querySelector("#numero2"),
    numero3 = document.querySelector("#numero3"),
    res = document.querySelector("#resposta"),
    sub = document.querySelector("#submit")

sub.addEventListener("click", function(){
    let num1 = numero1.value,
        num2 = numero2.value,
        num3 = numero3.value

    let numeros = [num1, num2, num3]
    res.innerHTML = numeros.reverse()
})