let button = document.querySelector("button"),
    resp = document.querySelector("#resp")

button.addEventListener("click", function(){
    let termo = 500, penultimo = 0, ultimo = 1, numero = 0

    console.log(penultimo)

    for(let count = 3; count <= termo; count++){
        numero = ultimo + penultimo
        penultimo = ultimo
        ultimo = numero
    }

    resp.innerHTML = numero
})

//browserType.replace('moz','van');