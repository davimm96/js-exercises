const numbers = [13,7,6,8,4,2,1,12],
    ul = document.querySelector("ul"),
    cre = document.querySelector("#crescente"),
    decre = document.querySelector("#decrescente")

//ul.innerHTML = `<li>${numbers}</li>`
const lista = numbers.map(function(item){
    ul.innerHTML += `<li>${item}</li>`
})
    
cre.addEventListener("click", function(){
    ul.innerHTML = ""
    numbers.sort(function(a, b){
        return a-b
    })
    
    //ul.innerHTML = `<li>${numbers}</li>`
    const lista = numbers.map(function(item){
        ul.innerHTML += `<li>${item}</li>`
    })

})

decre.addEventListener("click", function(){
    ul.innerHTML = ""
    numbers.sort(function(a, b){
        return b-a
    })

    const lista = numbers.map(function(item){
        ul.innerHTML += `<li>${item}</li>`
    })
})



