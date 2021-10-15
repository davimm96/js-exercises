let submit = document.querySelector("#submit"),
    res = document.querySelector("#res")

submit.addEventListener("click", function(){
let n1 = Number(document.querySelector("#n1").value),
    n2 = Number(document.querySelector("#n2").value),
    n3 = Number(document.querySelector("#n3").value),
    n4 = Number(document.querySelector("#n4").value),
    n5 = Number(document.querySelector("#n5").value),
    n6 = Number(document.querySelector("#n6").value),
    n7 = Number(document.querySelector("#n7").value),
    n8 = Number(document.querySelector("#n8").value),
    n9 = Number(document.querySelector("#n9").value),
    n10 = Number(document.querySelector("#n10").value),
    par = 0, impar = 0, x = 0, y = 1

    if(n1 < 1000 && n2 < 1000 && n3 < 1000 && n4 < 1000 && n5 < 1000 && n6 < 1000 && n7 < 1000 && n8 < 1000 && n9 < 1000 && n10 < 1000){
        while(x <= 999){
            if(n1 == x){
                par += 1
            }
    
            if(n2 == x){
                par += 1
            }
    
            if(n3 == x){
                par += 1
            }
            
            if(n4 == x){
                par += 1
            }
    
            if(n5 == x){
                par += 1
            }
    
            if(n6 == x){
                par += 1
            }
    
            if(n7 == x){
                par += 1
            }
    
            if(n8 == x){
                par += 1
            }
    
            if(n9 == x){
                par += 1
            }
    
            if(n10 == x){
                par += 1
            }
    
            x += 2
        }
    
        while(y <= 999){
            if(n1 == y){
                impar += 1
            }
    
            if(n2 == y){
                impar += 1
            }
    
            if(n3 == y){
                impar += 1
            }
            
            if(n4 == y){
                impar += 1
            }
    
            if(n5 == y){
                impar += 1
            }
    
            if(n6 == y){
                impar += 1
            }
    
            if(n7 == y){
                impar += 1
            }
    
            if(n8 == y){
                impar += 1
            }
    
            if(n9 == y){
                impar += 1
            }
    
            if(n10 == y){
                impar += 1
            }
            y += 2
        }
    }
    

    setTimeout(function(){
        if(par > 0 || impar > 0)
            res.innerHTML = `Existe ${par} números pares e ${impar} números impares`
        else 
            res.innerHTML = "Digite um valor abaixo de 999"
    },1)
})