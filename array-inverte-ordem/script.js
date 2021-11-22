let numeros = [], res = document.querySelector("#resposta"),
    qtd = prompt("Quantidade de numeros: ")

for(let x = 1; x <= qtd; x++){
    numeros.push(prompt("Número: "))
    res.innerHTML = numeros.reverse()
}


