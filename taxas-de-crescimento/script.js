let div = document.querySelector("div")

document.querySelector("#iniciar").addEventListener("click", function(){
    let a = 80000,
    b = 200000,
    anos = 0

    do{
        a = (a * 0.03) + a
        b = (b * 0.015) + b
        anos += 1
    }while(b > a){
        div.innerHTML = 
            `
                Dentro de ${anos} anos o país A superou a quantidade de abitantes em relação a o pais B, sendo o pais A com 
                ${a.toFixed()} abitantes e o país B com ${b.toFixed()} abitantes
            `
    }
})
