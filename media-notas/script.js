let alunos = prompt("Número de alunos: "), nota, soma = Number(),
    res = document.querySelector("#resposta"),
    todasNotas = []

for(let x = 1; x <= alunos; x++){
    nota = prompt(`Nota do aluno ${x}: `)
    todasNotas.push(nota) 
}

for(let i in todasNotas){
    soma += Number(todasNotas[i])
}
    
res.innerHTML = `A média dos ${todasNotas.length} alunos foi ${soma/Number(todasNotas.length)}`