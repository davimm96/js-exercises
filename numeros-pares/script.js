const div = document.querySelector("div")

for(let x = 1; x <= 20; x++) {
    if(x % 2 == 0){
        div.innerHTML += x + "<br>"
    }
}