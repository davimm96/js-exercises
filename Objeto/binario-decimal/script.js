document.querySelector("#submit").addEventListener("click", function(){
    let n = Number(document.querySelector("#numero").value),
        mostra = document.querySelector("#resposta"), i=0, result=0

    class Conta{
        constructor(num,p){
            this.num = num;
            this.p = p;
        }

        soma(){
            return Math.pow(this.num,this.p)
        }
    }

    for(let x = Number(String(n).length)-1; x >= 0; x--){
        let eleva = new Conta(2,i),
            mult = Number(eleva.soma()) * Number(String(n).charAt(x))
        
        if(String(n).charAt(x) == 0 || String(n).charAt(x) == 1){
            result += mult
            mostra.innerHTML = result
           
            console.log(`2*${i} = ${eleva.soma()} * ${String(n).charAt(x)} = ${mult}`)
            console.log(result)
            i++
        }else{
            mostra.innerHTML = "Digite apenas 0 e 1"
            break
        }
    }
})