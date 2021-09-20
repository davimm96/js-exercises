let firstName = document.querySelector("#first-name")
let lastName = document.querySelector("#last-name")
let salutation = document.querySelector("#salutation")

salutation.addEventListener("click", function(){
    if(firstName.value.length > 0 || lastName.value.length > 0){
        alert(`Saudações, meu caro amigo ${firstName.value} ${lastName.value}`)
    } else{
        alert("Digite o seu nome e sobrenome")
    }
    
})