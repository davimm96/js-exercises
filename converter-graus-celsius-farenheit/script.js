let sub = document.querySelector("#sub"),
    gra = document.querySelector("#gra"),
    cels = document.querySelector("#cels"),
    fare = document.querySelector("#fare"),
    res = document.querySelector("#res")

sub.addEventListener("click", function(){
    let g = Number(gra.value)
    //celsius para farenheit
    function cf(c){
        //c x 1,8 + 32
        let fareResult = (c * 1.8) + 32
        return fareResult.toFixed(1)
    }

    //farenheit para celsius
    function fc(f){
        //f - 32 / 1.8000
        let celsResult = (f - 32) / 1.8000
        return celsResult.toFixed(1)
    }

    if(fare.checked == true)
       res.innerHTML = `Convertido para ${cf(g)}`
    else if(cels.checked == true)
        res.innerHTML = `Convertido para ${fc(g)}`
    
})