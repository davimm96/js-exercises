let btnRed = document.querySelector("#btn-red")
let btnGreen = document.querySelector("#btn-green")

btnRed.addEventListener("click", function(){
    btnRed.style.background = "red"
    btnGreen.style.background = "white"
})

btnGreen.addEventListener("click", function(){
    btnRed.style.background = "white"
    btnGreen.style.background = "green"
})