const tabuada = document.querySelector("#tabuada")

for(let x = 1; x <= 10; x++){
    tabuada.innerHTML += `7 x ${x}: ${x * 7}<br>` 
}