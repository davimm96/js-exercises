let off1 = document.querySelector("#off") 
let on1 = document.querySelector("#on")

off1.addEventListener("click", function(){
    off1.style.display = "none"
    on.style.display = "block"
    console.count()
})

on1.addEventListener("click", function(){
    on1.style.display = "none"
    off1.style.display = "block"
})
let mundo = "mundo"
console.log("%cEsse texto estará grande e azul", "color: blue; font-size: 50px")