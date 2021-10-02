let submit = document.querySelector("#submit"),
    data = document.querySelector("#data")

submit.addEventListener("click", function(){
    let dt = data.value,
        regex = /[0-9]\//g,
        teste = regex.test(dt),
        dtOk = 0,
        dia = dt[0]+dt[1],
        mes = dt[3]+dt[4],
        ano = dt[6]+dt[7]+dt[8]+dt[9],
        qtdDias

    if(teste == true && dt[2] == "/" && dt[5] == "/") { //Para saber tem apenas números e barras(na posição serta)
        if(mes <= 12){ //Nenhum mes é maior que 12
            switch(mes){ //Para saber se o mes tem 30 ou 31 dias
                case "01": qtdDias = 31; console.log("0");break
                case "02": //em casos de anos bixesto em que o mes 02 tem 29 dias
                    if(ano % 400 == 0)
                        qtdDias = 29
                    else if(ano % 4 == 0 && ano % 100 != 0)
                        qtdDias = 29
                    else
                        qtdDias = 28; break
                case "03": qtdDias = 31; break
                case "04": qtdDias = 30; break
                case "05": qtdDias = 31; break
                case "06": qtdDias = 30; break
                case "07": qtdDias = 31; break
                case "08": qtdDias = 31; break
                case "09": qtdDias = 30; break
                case "10": qtdDias = 31; break
                case "11": qtdDias = 30; break
                case "12": qtdDias = 31;
            }
            
            if(dia <= qtdDias && dia > 0){ // para saber se não foi digitado um dia enexistente no derminado mes
                for(let x = 0; x < 10; x++){ // aqui vai descobrir se nas posições certas têm apenas números
                    if(x < 2 || x > 2 && x < 5 || x > 5 ){ // pula as posições que tem barras
                        switch(dt[x]){
                            case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "7": case "9": 
                                dtOk++; break
                            default: 
                                dtOk--
                        }
                    }  
                }
            }
        }
    }

    // Valida se a data é válida ou não, baseado nos testes condicionais
    setTimeout(function(){
        if(dtOk == 8){
            alert("Data válida")
        }else {
            alert("Data inválida")
        }
    },1)
})