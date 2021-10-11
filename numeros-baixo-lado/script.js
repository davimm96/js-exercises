let div = document.querySelector("div"),
    cb = document.querySelector("#cb"),
    ld = document.querySelector("#ld")

function conta(a){
    for(let x = 1; x <= 20; x++){
        div.innerHTML += x+a
    }
}

cb.addEventListener("click", function(){
    div.innerHTML = ""
    conta("<br>")
})

ld.addEventListener("click", function(){
    div.innerHTML = ""
    conta(", ")
})

