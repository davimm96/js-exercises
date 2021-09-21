const div = document.querySelector("div")
cores = ["Azulzinho", "Vermelinho", "Pretinho", "Laranjinha"]

function imprimir(item){
    div.innerHTML += `${item}<br>`
}

cores.forEach(imprimir)