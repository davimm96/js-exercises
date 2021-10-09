let submit = document.querySelector("#submit")

submit.addEventListener("click", function(){
    let nota = ""
   

    do{
        nota = prompt("Digite uma nota: ")
        if(nota <= 10 && nota >= 0){
            alert("correto")
        }else{
            alert("Nota invalida, tente novamente!");
        }
    }while(nota > 10 || nota < 0)
})    
