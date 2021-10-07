let div = document.querySelector("div"),
    valor = document.querySelector("#valor"),
    gasolina = document.querySelector("#gasolina"),
    alcool = document.querySelector("#alcool")

valor.addEventListener("keyup", function(){
    let vlr = valor.value
    vlr = vlr + ""
    vlr = vlr.replace(/[\D]+/g, '')
    valor.value = vlr
})

gasolina.addEventListener("click", function(){
    let preco = 2.50,
        vlr = valor.value
    preco = parseFloat(preco)
    preco = parseFloat(preco * vlr)
    let preco1 = preco - (preco * 0.04),
    preco2 = preco - (preco * 0.06)

    if(preco <= 20){
        div.innerHTML = `${preco1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} (com 4% de desconto)`
    }else if(preco > 20){
        div.innerHTML = `${preco2.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} (com 6% de desconto)`
    }else{
        div.innerHTML = "Digite um valor válido"
    }
})
//var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

alcool.addEventListener("click", function(){
    let preco = 1.90,
        vlr = valor.value
    preco = parseFloat(preco)
    preco = parseFloat(preco * vlr)
    let preco1 = preco - (preco * 0.03),
        preco2 = preco - (preco * 0.05)

    if(preco <= 20){
        div.innerHTML = `${preco1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} (com 3% de desconto)`
    }else if(preco > 20){
        div.innerHTML = `${preco2.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} (com 5% de desconto)`
    }else{
        div.innerHTML = "Digite um valor válido"
    }

    
})