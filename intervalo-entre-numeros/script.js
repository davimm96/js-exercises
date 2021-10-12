let div = document.querySelector("div"),
    submit = document.querySelector("#submit"),
    num1 = document.querySelector("#n1"),
    num2 = document.querySelector("#n2")

submit.addEventListener("click", function(){
    let n1 = Number(num1.value),
        n2 = Number(num2.value)
    div.innerHTML = ""

    if(n1 < n2){
        div.innerHTML = `Intervalo de ${n1} até ${n2}<br>`
        for(let x = 1; x <= 100; x++){
            if(x < n1 || x > n2){
                div.innerHTML += `${x}<br>`
            }
        }
    }else {
        div.innerHTML = `Intervalo de ${n2} até ${n1}<br>`
        for(let x = 1; x <= 100; x++){
            if(x < n2 || x > n1){
                div.innerHTML += `${x}<br>`
            }
        }
    }
})