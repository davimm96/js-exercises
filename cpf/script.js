let valueCpf = document.querySelector("#value-cpf")
let submitCpf = document.querySelector("#submit-cpf")
let punctuationCpf = document.querySelector("#punctuation-cpf")

submitCpf.addEventListener("click", function(){
    if(valueCpf.value.length == 11){
        const cpfFinalScore = valueCpf.value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
        punctuationCpf.innerHTML = cpfFinalScore
    }else {
        punctuationCpf.innerHTML = "Por favor, digite um CPF válido (11 digitos)."
    }  
})

// () grupo
// \d Encontra correspondência com um número. Equivalente a [0-9].
// ? repetido 0 ou 1 vez
// {3} qunatidade de digitos
// $1.$2.$3-$4 ordem