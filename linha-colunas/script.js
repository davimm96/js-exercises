let colunas = document.querySelector("#colunas"),
    linhas = document.querySelector("#linhas"),
    sub = document.querySelector("#submit"),
    res = document.querySelector("#resposta"),
    numeros = [], armazena

let teste = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
] 

sub.addEventListener("click", function(){
    let cl = colunas.value,
        ln = linhas.value
        
    for(let x = 0; x <= ln-1; x++){
        numeros.push([],)

        
   
        for(let y = 1; y <= cl; y++){
            let coluna = numeros[x].push(y)
            //res.innerHTML = `<li>${numeros}</li>`
            
            if(y == 1){
                //armazena = ""
                var i = 0;
                do {
                    i++;
                    armazena = ""
                } while (i < 1){
                    armazena += `${coluna}, `
                };
            }else if(y >= 2 && y < cl){
                armazena += `${coluna}, `
            }else if(y == cl){
                armazena += `${coluna}`
                if(armazena != undefined){
                    //numeros.push([],)
                    res.innerHTML += `<li>${armazena}</li>`
                }
            }

            
        }
    }
/*
    for(let z = 0; z<=ln; z++){

        if(armazena != undefined){
            numeros.push([],)
            res.innerHTML += `<li>${armazena}</li>`
        }
            
        for(let c = 0; c<=cl; c++){
            numeros[0].push(c)
            if(c == 1)
                armazena = ""
            armazena += `${c}, `
        } 
    }*/
 })


