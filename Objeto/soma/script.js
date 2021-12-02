document.querySelector("#submit").addEventListener("click", function(){
    let num1 = Number(document.querySelector("#numero1").value),
        num2 = Number(document.querySelector("#numero2").value)

    let conta = {
        n1 : num1,
        n2 : num2,
        mostraSoma : function(){
            alert(`Resultado ${Math.round(this.n1+this.n2)}`)
        }
    }

    conta.mostraSoma()
})