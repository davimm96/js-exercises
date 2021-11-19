let sub = document.querySelector("#sub")

sub.addEventListener("click", function(){
    var botoes = document.getElementsByName("mybuttons");

    for (var i = 0 in botoes) 
           if (botoes[i].checked)
               alert("Escolheu: " + botoes[i].value);
})

