let submit = document.querySelector("#submit")
let name1 = document.querySelector("#name")
let span = document.querySelector("span")

submit.addEventListener("click", function(){
    span.innerHTML = `Quantidade de caracteres do nome ${name1.value} é ${name1.value.length}`
})
