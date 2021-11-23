let numeros = [3,70,2,2,9000,0,2]



function teste(arr, n){
    for(let x = 0; x <= arr.length; x++){
        if(numeros[x] == n){
            console.log(`${numeros[x]} na posição ${x}`)
        }
    }  
}

teste(numeros, 2)