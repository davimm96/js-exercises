function entrar(){
    var senha = '';
  
    do{
     senha = prompt("Digite sua senha: ");
  
     if(senha=='2112js')
      alert("Entrando no sistema...");
     else
      alert("Senha invalida, tente novamente!");
    }while(senha !='2112js');
  }