let div = document.querySelector("div"),
    sb = document.querySelector("#sb"),
    n1 = document.querySelector("#n1"),
    n2 = document.querySelector("#n2"),
    n3 = document.querySelector("#n3")

sb.addEventListener("click", function(){
    let regex1 = /[0123456789]/g,
        regex2 = /[0123456789]/g,
        regex3 = /[0123456789]/g,

        test1 = regex1.test(n1.value),
        test2 = regex2.test(n2.value),
        test3 = regex3.test(n3.value),

        ni1 = parseInt(n1.value),
        ni2 = parseInt(n2.value),
        ni3 = parseInt(n3.value)

    if(test1 == true && test2 == true && test3 == true){
        if(ni1 > ni2 && ni1 > ni3){
            div.innerHTML = `${n1.value} é o maior número`
        }else if(ni2 > ni3 && ni2 > ni1){
            div.innerHTML = `${n2.value} é o maior número`
        }else if(ni3 > ni1 && ni3 > ni2){
            div.innerHTML = `${n3.value} é o maior número`
        }else {
            div.innerHTML = "Não digite números iguais"
        }
    }else {
        div.innerHTML = "Digite valores válidos (números)"
    } 
})