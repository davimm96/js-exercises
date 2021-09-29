let submit = document.querySelector("#submit"),
    valorHora = document.querySelector("#hora"),
    horaMes = document.querySelector("#mes"),
    ul = document.querySelector("ul")

valorHora.addEventListener("keyup", key)
horaMes.addEventListener("keyup", key2)

function key2(){
    let elemento = document.querySelector('#mes'),
        valor = elemento.value
    
    valor = valor + ''
    valor = parseInt(valor.replace(/[\D]+/g, ''))////
    valor = valor + ''
    valor = valor.replace(/([0-9]{2})$/g, ":$1")

    
    elemento.value = valor
    if(valor == 'NaN') elemento.value = ''
}

function key(){
    let elemento = document.querySelector('#hora'),
        valor = elemento.value
    
    valor = valor + ''
    valor = parseInt(valor.replace(/[\D]+/g, ''))////
    valor = valor + ''
    valor = valor.replace(/([0-9]{2})$/g, ",$1")

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
    }

    elemento.value = valor
    if(valor == 'NaN') elemento.value = ''
}

submit.addEventListener("click", function(){
    ul.innerHTML = ""
    
    let hm = parseInt(horaMes.value), //Hora por mês
        vh = parseFloat(valorHora.value.replace(',', '.'))

    let sb = vh * hm ,//Salário brutos
        ir1 = Number(sb * 0.05).toLocaleString('pt-br', {minimumFractionDigits: 2}), //5% de desconto
        ir2 = Number(sb * 0.10).toLocaleString('pt-br', {minimumFractionDigits: 2}), //10% de desconto
        ir3 = Number(sb * 0.20).toLocaleString('pt-br', {minimumFractionDigits: 2}), //20% de desconto
        fgts = Number(sb * 0.11).toLocaleString('pt-br', {minimumFractionDigits: 2}),
        desconto1 = Number(sb * 0.15).toLocaleString('pt-br', {minimumFractionDigits: 2}),
        desconto2 = Number(sb * 0.20).toLocaleString('pt-br', {minimumFractionDigits: 2}),
        desconto3 = Number(sb * 0.30).toLocaleString('pt-br', {minimumFractionDigits: 2}),
        salarioLiquido1 = Number(sb - (sb * 0.10)).toLocaleString('pt-br', {minimumFractionDigits: 2}),
        salarioLiquido2 = Number(sb - (sb * 0.15)).toLocaleString('pt-br', {minimumFractionDigits: 2}),
        salarioLiquido3 = Number(sb - (sb * 0.20)).toLocaleString('pt-br', {minimumFractionDigits: 2}),
        salarioLiquido4 = Number(sb - (sb * 0.30)).toLocaleString('pt-br', {minimumFractionDigits: 2}),
        salarioBruto = sb.toLocaleString('pt-br', {minimumFractionDigits: 2})

    console.log(`hora mes ${hm} + valor hora ${vh} = salario bruto ${sb}`)

    if(sb <= 900){
        ul.innerHTML += `<li>Salário Bruto: R$ ${salarioBruto}</li>`
        ul.innerHTML += `<li>IR (isento): R$ 00,00</li>`
        ul.innerHTML += `<li>INSS ( 10%): R$ ${ir2}</li>`
        ul.innerHTML += `<li>FGTS (11%): R$ ${fgts}</li>`
        ul.innerHTML += `<li>Total de descontos: R$ ${ir2}</li>`
        ul.innerHTML += `<li>Salário Liquido: ${salarioLiquido1}</li>`
    }else if(sb <= 1500){
        ul.innerHTML += `<li>Salário Bruto: R$ ${salarioBruto}</li>`
        ul.innerHTML += `<li>IR (5%): R$ ${ir1}</li>`
        ul.innerHTML += `<li>INSS ( 10%): R$ ${ir2}</li>`
        ul.innerHTML += `<li>FGTS (11%): R$ ${fgts}</li>`
        ul.innerHTML += `<li>Total de descontos: R$ ${desconto1}</li>`
        ul.innerHTML += `<li>Salário Liquido: ${salarioLiquido2}</li>`
    }else if(sb <= 2500){
        ul.innerHTML += `<li>Salário Bruto: R$ ${salarioBruto}</li>`
        ul.innerHTML += `<li>IR (10%): R$ ${ir2}</li>`
        ul.innerHTML += `<li>INSS ( 10%): R$ ${ir2}</li>`
        ul.innerHTML += `<li>FGTS (11%): R$ ${fgts}</li>`
        ul.innerHTML += `<li>Total de descontos: R$ ${desconto2}</li>`
        ul.innerHTML += `<li>Salário Liquido: ${salarioLiquido3}</li>`
    }else if(sb > 2500){
        ul.innerHTML += `<li>Salário Bruto: R$ ${salarioBruto}</li>`
        ul.innerHTML += `<li>IR (20%): R$ ${ir3}</li>`
        ul.innerHTML += `<li>INSS ( 10%): R$ ${ir2}</li>`
        ul.innerHTML += `<li>FGTS (11%): R$ ${fgts}</li>`
        ul.innerHTML += `<li>Total de descontos: R$ ${desconto3}</li>`
        ul.innerHTML += `<li>Salário Liquido: ${salarioLiquido4}</li>`
    }   
})


