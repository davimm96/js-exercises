let loginBlock = document.querySelector("#loginBlock"),
    senha = document.querySelector("#senha"),
    login = document.querySelector("#login"),
    submit = document.querySelector("#submit"),
    status1 = document.querySelector("#status")

submit.addEventListener("click", function(){
    let s = senha.value,
        l = login.value
    status1.style.display = "block"

    do{
        if(s != l){
            status1.innerHTML = "Logado"
            break
        }else {
            loginBlock.style.display = "block"
            status1.innerHTML = "Escreva senha e o login diferentes"
            break
        }
    }while(loginBlock.style.display == "block")
})