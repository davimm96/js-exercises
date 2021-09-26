let div = document.querySelector("div")
const letter = document.querySelector("#letter"),
    submit = document.querySelector("#submit")
    
submit.addEventListener("click", function(){
    switch(letter.value){
        case "a": case "e": case "i": case "o": case "u": case "y": 
            div.innerHTML = `${letter.value.toUpperCase()} é vogal`; break
        case "b": case "c": case "d": case "f": case "g": case "h": case "j": case "k": case "l": 
        case "m": case "n": case "p": case "q": case "r": case "s": case "t": case "v": case "x": case "z":
            div.innerHTML = `${letter.value.toUpperCase()} é consoante`; break
        case "w":
            div.innerHTML = `${letter.value.toUpperCase()} é vogal e consoante`; break
        default:
            div.innerHTML = "Digite um valor válido (apenas uma letra)"; break
    }
})