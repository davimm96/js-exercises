let numbs = [],
    li = document.querySelector("li")
    x = 0
const subm = document.querySelector("#subm"),
    numb = document.querySelector("#numb"),
    ul = document.querySelector("ul"),
    div = document.querySelector("div")

subm.addEventListener("click", function(){
    div.innerHTML = "Clique num número para deletar<br>"
    numbs.push(numb.value)
    if(numb.value % 2 == 0){
        ul.innerHTML += `<li style="color:red" class="a">${numbs[x]}</li>`
        x++
    }else {
        ul.innerHTML += `<li class="a">${numbs[x]}</li>`
        x++
    }

    todasClass = document.querySelectorAll(".a")
    for(n = 0; n < todasClass.length; n++){
      todasClass[n].addEventListener("click", function(){
        this.style.display = "none"
        this.innerHTML = ""
      })
    }
})

