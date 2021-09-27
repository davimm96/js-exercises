let submit = document.querySelector("#submit"),
    n1 = document.querySelector("#n1"),
    n2 = document.querySelector("#n2")

submit.addEventListener("click", function(){
    let n1v = n1.value
    let n2v = n2.value

    let regex1 = /[0123456789]/g
    let regex2 = /[0123456789]/g

    let test1 = regex1.test(n1v)
    let test2 = regex1.test(n2v)

    if(test1 == true && test2 == true){
        function altera1(){
            n1v = 7
            return n1v
        }
    
        function altera2(){
            n2v = 12
            return n2v
        }
        alert(`Valor ${n1v} foi alterado para ${altera1()} e ${n2v} foi alterado para ${altera2()}`)
    }else {
        alert("Por favor digite um valor válido")
    }
    
})