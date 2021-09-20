let valueCpf = document.querySelector("#value-cpf")
let submitCpf = document.querySelector("#submit-cpf")
let punctuationCpf = document.querySelector("#punctuation-cpf")

submitCpf.addEventListener("click", function(){
    const cpfFinalScore = valueCpf.value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
    const regex = /\D|\-|\s/gi
    let test1 = regex.test(valueCpf.value)
    console.log(test1)
    if(valueCpf.value.length == 11 && test1 === false){
        punctuationCpf.innerHTML = cpfFinalScore
    }else {
        punctuationCpf.innerHTML = "Por favor, digite um CPF válido (11 digitos), sem pontuações."
    }  
})

// () grupo
// \d Encontra correspondência com um número. Equivalente a [0-9].
// ? repetido 0 ou 1 vez
// {3} qunatidade de digitos
// $1.$2.$3-$4 ordem e caracteres