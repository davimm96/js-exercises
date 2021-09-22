const div = document.querySelector("div")

let n = 1
do {
    div.innerHTML += `${n} doWhilizada<br>`
    n += 1
}while(n <= 10)