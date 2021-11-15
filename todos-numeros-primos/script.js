 let numero = document.querySelector("#n"),
    sub = document.querySelector("#sub"),
    res = document.querySelector("#res")


sub.addEventListener("click", function(){
    let num = Number(numero.value)
    exibirNumerosPrimos(num)

    function exibirNumerosPrimos(limite){
        for(let numero = 2; numero <= limite; numero++){
            let ehPrimo = true

            for(let divisor = 2; divisor < numero; divisor++){
                if(numero % divisor === 0){
                    ehPrimo = false
                    break
                }
            }
            if(ehPrimo) console.log(numero)
        }
    }
}) 
 

