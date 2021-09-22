const now = new Date,
    //Lista os mêses em português
    months = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"),
    //Mês atual
    month = `${String(now.getMonth()+1).padStart(2, '0')}`,
    //Dia, mês e ano atuais
    date1 = `${String(now.getDate()).padStart(2, '0')}/${month}/${now.getFullYear()}`

function nextMonthFunc(item){
    //Se o mês da lista de mêses for igual ao próximo mês, mostre    
    if(months.indexOf(item) == month){
        //data atual e próximo mês
        document.write(`Hoje é ${date1}, o próximo mês será ${item}`)
    } 
}

//Executa a função para cada item do array
months.forEach(nextMonthFunc)



