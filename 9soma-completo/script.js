let sum1 = document.querySelector("#sum1")
let sum2 = document.querySelector("#sum2")
const submit = document.querySelector("#submit")

submit.addEventListener("click", function(){
    function conta(a,b){
        return a + b
    }
    if(sum1.value.length > 0 && sum1.value.length > 0) {
        alert(conta(parseInt(sum1.value), parseInt(sum2.value)))
    }else {
        alert("digit um número")
    }
})