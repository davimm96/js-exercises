class Pessoa {
    constructor(profissao, idade){
        this.profissao = profissao
        this.idade = idade
    }
}

const davi = new Pessoa("Programador", "25")
alert(`Idade: ${davi.idade}, profissão: ${davi.profissao}`)