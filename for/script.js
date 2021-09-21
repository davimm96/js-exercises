const div = document.querySelector("div")

for(let x = 1; x <= 20; x++){
    div.innerHTML += `<div style="font-size:${x}px">texto repetido por ${x} vezes</div>`
}