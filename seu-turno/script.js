let text = document.querySelector("#text"),
    submit = document.querySelector("#submit")

submit.addEventListener("click", function(){
    let t = text.value.toLowerCase()
    
    switch(t){
        case "m": alert("Bom dia"); break
        case "v": alert("Boa tarde"); break
        case "n": alert("Boa noite"); break
        default: alert("Digite um valor válido (M, V, N)")
    }
})