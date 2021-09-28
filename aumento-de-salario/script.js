let submit = document.querySelector("#submit"),
    n1 = document.querySelector("#n1"),
    ul = document.querySelector("#result")

submit.addEventListener("click", function(){
    let n = Number(n1.value).toFixed(2), //Número com duas casas decimais
        aumento1v = (Number(n1.value) * 0.20) + Number(n1.value), //Salário mais aumento 20%
        aumento1f = aumento1v - Number(n1.value), // Valor do aumento 
        aumento2v = (Number(n1.value) * 0.15) + Number(n1.value), //15%....
        aumento2f = aumento2v - Number(n1.value),
        aumento3v = (Number(n1.value) * 0.10) + Number(n1.value),
        aumento3f = aumento3v - Number(n1.value),
        aumento4v = (Number(n1.value) * 0.05) + Number(n1.value),
        aumento4f = aumento4v - Number(n1.value),

        troca = /\./g,//Troca ponto por vírgula
        valorAumento1 = aumento1f.toFixed(2).replace(troca, ","),
        novoValor1 = aumento1v.toFixed(2).replace(troca, ","),
        valorAumento2 = aumento2f.toFixed(2).replace(troca, ","),
        novoValor2 = aumento2v.toFixed(2).replace(troca, ","),
        valorAumento3 = aumento3f.toFixed(2).replace(troca, ","),
        novoValor3 = aumento3v.toFixed(2).replace(troca, ","),
        valorAumento4 = aumento4f.toFixed(2).replace(troca, ","),
        novoValor4 = aumento4v.toFixed(2).replace(troca, ","),
        valor = n.replace(troca, ","),

        regex = /[0123456789]/g, //Aceita apenas números
        test = regex.test(n1.value)
      
    if(test == true){
        if(n <= 280.00) {
            ul.innerHTML = 
                `
                    <li>Salário antes do reajuste: <span style="color:red">R$ ${valor}</span>;</li>
                    <li>Percentual de aumento aplicado: <span style="color:red">20%</span></span>;</li>
                    <li>Valor do aumento: <span style="color:red">R$ ${valorAumento1}</span>;</li>
                    <li>Novo salário, após o aumento: <span style="color:red">R$ ${novoValor1}</span>.</li>
                `
        }else if(n <= 700.00){
            ul.innerHTML = 
                `
                    <li>Salário antes do reajuste: <span style="color:red">R$ ${valor}</span>;</li>
                    <li>Percentual de aumento aplicado: <span style="color:red">15%</span>;</li>
                    <li>Valor do aumento: <span style="color:red">R$ ${valorAumento2}</span>;</li>
                    <li>Novo salário, após o aumento: <span style="color:red">R$ ${novoValor2}</span>.</li>
                `
        }else if(n <= 1500.00){
            ul.innerHTML = 
                `
                    <li>Salário antes do reajuste: <span style="color:red">R$ ${valor}</span>;</li>
                    <li>Percentual de aumento aplicado: <span style="color:red">10%</span>;</li>
                    <li>Valor do aumento: <span style="color:red">R$ ${valorAumento3}</span>;</li>
                    <li>Novo salário, após o aumento: <span style="color:red">R$ ${novoValor3}</span>.</li>
                `
        }else if(n > 1500.00){
            ul.innerHTML = 
                `
                    <li>Salário antes do reajuste: <span style="color:red">R$ ${valor}</span>;</li>
                    <li>Percentual de aumento aplicado: <span style="color:red">5%</span>;</li>
                    <li>Valor do aumento: <span style="color:red">R$ ${valorAumento4}</span>;</li>
                    <li>Novo salário, após o aumento: <span style="color:red">R$ ${novoValor4}</span>.</li>
                `
        }
    }else {
        ul.innerHTML = "Digite um valor válido"
    }    
    
})