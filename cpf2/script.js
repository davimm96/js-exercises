let valueCpf = document.querySelector("#value-cpf")
let submitCpf = document.querySelector("#submit-cpf")
let punctuationCpf = document.querySelector("#punctuation-cpf")

submitCpf.addEventListener("click", function(){
    const text = valueCpf.value //Valor digitado
    const regex = /\.|\-/gi //Encontra pontuaçãoes (.-)
    const final = text.replace(regex, "") //Substitui pontuações por nada
    //Atribui pontuações (para verificar se o usuário escreveu o CPF com as pontuações corretas)
    const punctuation = final.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4") 
    if(valueCpf.value.length == 14 && punctuation == text){
        punctuationCpf.innerHTML = final
    }else {
        punctuationCpf.innerHTML = "Por favor, digite um CPF válido (11 numeros) com pontuação, ex: 123.456.789-11"
    }  
})

// \. encontra "."
// | vale como || e &&
// \- encontra "-"
// gi Global e não diferenciando minúsculas de maiúsculas

// () grupo
// \d Encontra correspondência com um número. Equivalente a [0-9].
// ? repetido 0 ou 1 vez
// {3} qunatidade de digitos
// $1.$2.$3-$4 ordem
