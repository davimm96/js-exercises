const submit = document.querySelector("#submit"),
    numb = document.querySelector("#numb")

function radom(min,max){
    return Math.round(Math.random() * (max - min) + min)
    // Math.round Arredonda número
    // Math.random() * (max - min) + min gera aleatoriedade
}

submit.addEventListener("click", function(){
    let result = radom(1,10)
    if(result == numb.value) {
        return alert(`Você acertou, o número é ${result}`)
    }else {
        return alert(`Você errou, o número é ${result}`)
    }
})