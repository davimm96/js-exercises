let numbs = [],
    li = document.querySelector("li")
const subm = document.querySelector("#subm"),
    numb = document.querySelector("#numb"),
    ul = document.querySelector("ul")
    
subm.addEventListener("click", function(){
    if(numb.value.length > 0) {
        ul.innerHTML = "" //reseta a lista para não duplicar
        numbs.push(numb.value) //atribui o valor digitado no array
        function lista(item,n){
            if(item % 2 == 0){  //par
                return ul.innerHTML += `<li style="color:red">${item}</li>`
                
            }else { //impar
                return ul.innerHTML += `<li>${item}</li>`
            }

            
        }

        numbs.forEach(lista) //para cada item do array será implementada a função lista
       
      
    }else {
        alert("Digite um número")
    }
})





 



