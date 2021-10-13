let div = document.querySelector("div"),
    submit = document.querySelector("#submit"),
    num1 = document.querySelector("#n1"),
    num2 = document.querySelector("#n2")

n1.addEventListener("keyup", mascara)
n2.addEventListener("keyup", mascara)

function mascara(){
    let n1 = num1.value,
        n2 = num2.value

    n1 = n1 + ""
    n2 = n2 + ""

    n1 = n1.replace(/\D/g, "")
    n2 = n2.replace(/\D/g, "")

    num1.value = n1
    num2.value = n2
}
    


submit.addEventListener("click", function(){
    let n1 = Number(num1.value),
        n2 = Number(num2.value),
        regex = /\D/g

    if(regex.test(num1.value) == false && regex.test(num2.value) == false){
        div.innerHTML = ""
        let count = 0

        if(n1 < n2){
            div.innerHTML = `Intervalo de ${n1} até ${n2}<br>`
            
            for(let x = 1; x <= 100; x++){
                if(x < n1 || x > n2){
                    count += x
                    div.innerHTML += `${x}, `
                }
            }
            div.innerHTML += `soma de todos os números: ${count}`
        }else {
            div.innerHTML = `Intervalo de ${n2} até ${n1}<br>`
            for(let x = 1; x <= 100; x++){
                if(x < n2 || x > n1){
                    div.innerHTML += `${x}, `
                }
            }
            div.innerHTML += `soma de todos os números: ${count}`
        }
    }else {
        div.innerHTML = "Digite valores válidos"
    }
   
})