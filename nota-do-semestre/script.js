let submit = document.querySelector("#submit"),
    nota1 = document.querySelector("#nota1"),
    nota2 = document.querySelector("#nota2")

nota1.addEventListener("keyup", notaFunc)
nota2.addEventListener("keyup", notaFunc)

//Mascara
function notaFunc(){
    let regex = /[a-z]|\W|_|\s/gi,
        regex2 = /([0-9]{1}$)/g
        nt1 = nota1.value,
        nt2 = nota2.value
    
    nt1 = nt1 + ""
    nt2 = nt2 + ""
    nt1 = nt1.replace(regex, "")
    nt2 = nt2.replace(regex, "")
    nt1 = nt1 + ""
    nt2 = nt2 + ""
    nt1 = nt1.replace(regex2, ".$1")
    nt2 = nt2.replace(regex2, ".$1")

    nota1.value = nt1
    nota2.value = nt2
}

submit.addEventListener("click", function(){
    let nt1 = parseFloat(nota1.value),
        nt2 = parseFloat(nota2.value),
        media = parseFloat((nt1 + nt2) / 2)
    console.log(nt1+" "+nt2+" "+media)

    if(media <= 10.0 && media >= 9.0){
        alert(`Sua média é ${media}, você tirou A, portanto foi aprovado`)
    }else if(media <= 8.9 && media >= 7.5){
        alert(`Sua média é ${media}, você tirou B, portanto foi aprovado`)
    }else if(media <= 7.4 && media >= 6.0){
        alert(`Sua média é ${media}, você tirou C, portanto foi aprovado`)
    }else if(media <= 5.9 && media >= 4.0){
        alert(`Sua média é ${media}, você tirou D, portanto foi reprovado`)
    }else if(media <= 3.9 && media >= 0){
        alert(`Sua média é ${media}, você tirou E, portanto foi reprovado`)
    }else {
        alert("Digite valores válidos")
    }
    
})
