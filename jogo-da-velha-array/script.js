let jv0 = document.querySelector("#jv0"),
    jv1 = document.querySelector("#jv1"),
    jv2 = document.querySelector("#jv2"),
    jv3 = document.querySelector("#jv3"),
    jv4 = document.querySelector("#jv4"),
    jv5 = document.querySelector("#jv5"),
    jv6 = document.querySelector("#jv6"),
    jv7 = document.querySelector("#jv7"),
    jv8 = document.querySelector("#jv8"),
    jg1=false,jg2=false,vezJ=1,v=0,click = 0
    jg = [
        [,,],
        [,,],
        [,,]
    ]


function vezJfunc(){
    if(vezJ == 1){
        setTimeout(function(){ vezJ = 0 }, 1)
        j1vitoria()
        j2vitoria()
        setTimeout(function(){  vezJ=0 }, 1)
        click += 1
    }else if(vezJ == 0){
        setTimeout(function(){ vezJ = 1 }, 1)
        j1vitoria()
        j2vitoria()
        setTimeout(function(){  vezJ=1 }, 1)
        click += 1
    }
        
}

jv0.addEventListener("click", jv0f)
function jv0f(){
    if(vezJ == 1){
        jg[0][0] = "X1"
        jv0.innerHTML = "X"
    }else if(vezJ == 0){ 
        jg[0][0] = "X0"
        jv0.innerHTML = "O"
    }
    
    jv0.removeEventListener("click", jv0f)
    vezJfunc()
}
    


jv1.addEventListener("click", jv1f)
function jv1f(){
    if(vezJ == 1){
        jg[0][1] = "X1"
        jv1.innerHTML = "X"
    }else if(vezJ == 0){ 
        jg[0][1] = "X0"
        jv1.innerHTML = "O"
    }
    
    jv1.removeEventListener("click", jv1f)
    vezJfunc()
}

jv2.addEventListener("click", jv2f)
function jv2f(){
    if(vezJ == 1){
        jg[0][2] = "X1"
        jv2.innerHTML = "X"
    }else if(vezJ == 0){ 
        jg[0][2] = "X0"
        jv2.innerHTML = "O"
    }
    
    jv2.removeEventListener("click", jv2f)
    vezJfunc()
}

jv3.addEventListener("click", jv3f)
function jv3f(){
    if(vezJ == 1){
        jg[1][0] = "X1"
        jv3.innerHTML = "X"
    }else if(vezJ == 0){ 
        jg[1][0] = "X0"
        jv3.innerHTML = "O"
    }
    
    jv3.removeEventListener("click", jv3f)
    vezJfunc()
}

jv4.addEventListener("click", jv4f)
function jv4f(){
    if(vezJ == 1){
        jg[1][1] = "X1"
        jv4.innerHTML = "X"
    }else if(vezJ == 0){ 
        jg[1][1] = "X0"
        jv4.innerHTML = "O"
    }
    
    jv4.removeEventListener("click", jv4f)
    vezJfunc()
}

jv5.addEventListener("click", jv5f)
function jv5f(){
    if(vezJ == 1){
        jg[1][2] = "X1"
        jv5.innerHTML = "X"
    }else if(vezJ == 0){ 
        jg[1][2] = "X0"
        jv5.innerHTML = "O"
    }
    
    jv5.removeEventListener("click", jv5f)
    vezJfunc()
}

jv6.addEventListener("click", jv6f)
function jv6f(){
    if(vezJ == 1){
        jg[2][0] = "X1"
        jv6.innerHTML = "X"
    }else if(vezJ == 0){  
        jg[2][0] = "X0"
        jv6.innerHTML = "O"
    }
    
    jv6.removeEventListener("click", jv6f)
    vezJfunc()
}

jv7.addEventListener("click", jv7f)
function jv7f(){
    if(vezJ == 1){
        jg[2][1] = "X1"
        jv7.innerHTML = "X"
    }else if(vezJ == 0){ 
        jg[2][1] = "X0"
        jv7.innerHTML = "O"
    }
    
    jv7.removeEventListener("click", jv7f)
    vezJfunc()
}

jv8.addEventListener("click", jv8f)
function jv8f(){
    if(vezJ == 1){
        jg[2][2] = "X1"
        jv8.innerHTML = "X"
    }else if(vezJ == 0){ 
        jg[2][2] = "X0"
        jv8.innerHTML = "O"
    }
    
    jv8.removeEventListener("click", jv8f)
    vezJfunc()
}

function j1vitoria(){
    if(vezJ == 1){ 
        if(jg[0][0] == "X1" && jg[1][1] == "X1" && jg[2][2] == "X1"){
            alert("Jogador 1 venceu")
            v=1
            location.reload()
        }else if(jg[0][0] == "X1" && jg[0][1] == "X1" && jg[0][2] == "X1"){
            alert("Jogador 1 venceu")
            v=1
            location.reload()
        }else if(jg[1][0] == "X1" && jg[1][1] == "X1" && jg[1][2] == "X1"){
            alert("Jogador 1 venceu")
            v=1
            location.reload()
        }else if(jg[2][0] == "X1" && jg[2][1] == "X1" && jg[2][2] == "X1"){
            alert("Jogador 1 venceu")
            v=1
            location.reload()
        }else if(jg[0][0] == "X1" && jg[1][0] == "X1" && jg[2][0] == "X1"){
            alert("Jogador 1 venceu")
            v=1
            location.reload()
        }else if(jg[0][1] == "X1" && jg[1][1] == "X1" && jg[2][1] == "X1"){
            alert("Jogador 1 venceu")
            v=1
            location.reload()
        }else if(jg[0][2] == "X1" && jg[1][2] == "X1" && jg[2][2] == "X1"){
            alert("Jogador 1 venceu")
            v=1
            location.reload()
        }else if(jg[0][2] == "X1" && jg[1][1] == "X1" && jg[2][0] == "X1"){
            alert("Jogador 1 venceu")
            v=1
            location.reload()
        }else if(click == 8 && v==0 && jg[0][0] != "" && jg[0][1] != "" && jg[0][2] != "" && jg[1][0] != "" && jg[1][1] != "" && jg[1][2] != "" && jg[2][0] != "" && jg[2][1] != "" && jg[2][2] != ""){
            alert("Empate")
            location.reload()
        }
    }  
}

function j2vitoria(){
    if(vezJ == 0){ 
        if(jg[0][0] == "X0" && jg[1][1] == "X0" && jg[2][2] == "X0"){
            alert("Jogador 2 venceu")
            v=1
            location.reload()
        }else if(jg[0][0] == "X0" && jg[0][1] == "X0" && jg[0][2] == "X0"){
            alert("Jogador 2 venceu")
            v=1
            location.reload()
        }else if(jg[1][0] == "X0" && jg[1][1] == "X0" && jg[1][2] == "X0"){
            alert("Jogador 2 venceu")
            v=1
            location.reload()
        }else if(jg[2][0] == "X0" && jg[2][1] == "X0" && jg[2][2] == "X0"){
            alert("Jogador 2 venceu")
            v=1
            location.reload()
        }else if(jg[0][0] == "X0" && jg[1][0] == "X0" && jg[2][0] == "X0"){
            alert("Jogador 2 venceu")
            v=1
            location.reload()
        }else if(jg[0][1] == "X0" && jg[1][1] == "X0" && jg[2][1] == "X0"){
            alert("Jogador 2 venceu")
            v=1
            location.reload()
        }else if(jg[0][2] == "X0" && jg[1][2] == "X0" && jg[2][2] == "X0"){
            alert("Jogador 2 venceu")
            v=1
            location.reload()
        }else if(jg[0][2] == "X0" && jg[1][1] == "X0" && jg[2][0] == "X0"){
            alert("Jogador 2 venceu")
            v=1
            location.reload()
        }else if(click == 8 && v==0 && jg[0][0] != "" && jg[0][1] != "" && jg[0][2] != "" && jg[1][0] != "" && jg[1][1] != "" && jg[1][2] != "" && jg[2][0] != "" && jg[2][1] != "" && jg[2][2] != ""){
            alert("Empate")
            location.reload()
        }
    }  
}