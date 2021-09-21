const number1 = document.querySelector("#number")
const submit1 = document.querySelector("#submit")

submit1.addEventListener("click", function(){
    function desconto(n1){
        let n = (n1 * 0.05) - n1 // 0.05 representa 5% como 0.15 representa 15%
        let stringN = String(n) // convertendo em string para ser aceito pelo regex
        const regex = /\-/gi // procura -
        return stringN.replace(regex, "") // troca - por nada
    }
    if(number1.value.length > 0){
        alert(`Valor com 5% de desconto: ${desconto(number1.value)}`)
    }else {
        alert("Digite um número")
    }
    
})