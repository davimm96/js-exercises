let res = document.querySelector("#resposta"),
    sub = document.querySelector("#submit"),
    digitos = document.querySelector("#digitos")

sub.addEventListener("click", function(){
    let d = digitos.value
    res.innerHTML = `Esse texto tem ${d.length} dígitos`
})