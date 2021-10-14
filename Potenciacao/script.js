let div = document.querySelector("div"),
    base = document.querySelector("#base"),
    expoente = document.querySelector("#expoente"),
    submit = document.querySelector("#submit")

submit.addEventListener("click", function(){
    div.innerHTML = ""
    let b = base.value,
        e = expoente.value

    div.innerHTML = b**e
})
