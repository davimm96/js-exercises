let div = document.querySelector("div"),
    grade1 = document.querySelector("#grade1"),
    grade2 = document.querySelector("#grade"),
    grade3 = document.querySelector("#grade3"),
    submit = document.querySelector("#submit")

submit.addEventListener("click", function(){
    let regex1 = /[0123456789]/gi,
        regex2 = /[0123456789]/gi,
        regex3 = /[0123456789]/gi,
        n1 = Number(grade1.value),
        n2 = Number(grade2.value),
        n3 = Number(grade3.value),
        average = (n1 + n2 + n3) / 3,
        numb1 = regex1.test(grade1.value),
        numb2 = regex2.test(grade2.value),
        numb3 = regex3.test(grade3.value)

        console.log(average)

    if(n1 <= 10 && n2 <= 10 && n3 <= 10 && numb1 == true && numb2 == true && numb3 == true){
        if(average == 10) {
            div.innerHTML = "Você foi aprovado com Distinção"
        }else if(average >= 7){
            div.innerHTML = "Você foi aprovado"
        }else {
            div.innerHTML = "Você foi reprovado"
        }
    }else {
        div.innerHTML = "Digite 3 números de 0 até 10"
    }
})


