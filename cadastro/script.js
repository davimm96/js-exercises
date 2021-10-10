document.querySelector("#submit").addEventListener("click", function(){
    do{
        let nome = prompt("Digite o seu nome: "),
            idade = prompt("Digite a sua idade: "),
            salario = prompt("Digite o seu salário: "),
            sexo = prompt("Digite o seu sexo"),
            es = prompt("Digite o seu estado civil")

        if(nome.length > 3 && idade >= 0 && idade < 150 && salario > 0 && es == "Solteiro" || es == "Casado" || es == "Viuvo" || es == "Divorciado" && sexo == "Masculino" || sexo == "Feminino"){
            document.write("Cadastrado")
        }else {
            alert("Dados inválidos")
        }

        

    }while(nome.length < 3 && idade <= 0 && idade > 150 && salario < 0 && es != "Solteiro" || es != "Casado" || es != "Viuvo" || es != "Divorciado" && sexo != "Masculino" || sexo != "Feminino")
})