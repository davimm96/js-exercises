let div = document.querySelector("div"),
    n1 = document.querySelector("#n1"),
    submit = document.querySelector("#submit")

submit.addEventListener("click", function(){
    let regex = /[0123456789]/g, //aceita apenas números
        test = regex.test(n1.value), //testa para saber se tem apenas numeros
        n1string = String(n1.value), //converte em string
        //split separa aos caracteres, reverse inverte, join junta novamente
        n1reverse = n1string.split("").reverse().join("") 

    test == true ? div.innerHTML = n1reverse : div.innerHTML = "Digite um valor válido" 
})