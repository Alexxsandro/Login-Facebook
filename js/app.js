let btn_volta = document.querySelector(".btn_volta");
btn_volta.addEventListener("click", function(){
    
    let container_cadastre = document.querySelector(".container_cadastre");
    container_cadastre.style.display = 'none'

    let cadastroInputEmail = document.querySelector(".cadastroInputEmail")
    cadastroInputEmail.style.display = 'none';

    let cadastroInputNome = document.querySelector(".cadastroInputNome");
    cadastroInputNome.style.display = "none";

    let cadastroInputSenha = document.querySelector(".cadastroInputSenha")
    cadastroInputSenha.style.display = 'none';
})

let btn_entrar = document.getElementById("btn_entrar");
btn_entrar.addEventListener("click", function(){
    let container_cadastre = document.querySelector(".container_cadastre");
    container_cadastre.style.display = 'block'
})

let cadastro_input_ln = document.querySelector(".cadastro_input_ln");
cadastro_input_ln.addEventListener("focus", function(){
    

    let cadastroInputNome = document.querySelector(".cadastroInputNome");
    cadastroInputNome.style.display = "block";

    let cadastroInputEmail = document.querySelector(".cadastroInputEmail")
    cadastroInputEmail.style.display = 'none';

    let cadastroInputSenha = document.querySelector(".cadastroInputSenha")
    cadastroInputSenha.style.display = 'none';
})

let emailUsuario = document.getElementById("emailUsuario")
emailUsuario.addEventListener("focus", function(){

    let cadastroInputEmail = document.querySelector(".cadastroInputEmail")
    cadastroInputEmail.style.display = 'block';

    let cadastroInputNome = document.querySelector(".cadastroInputNome");
    cadastroInputNome.style.display = "none";

    let cadastroInputSenha = document.querySelector(".cadastroInputSenha")
    cadastroInputSenha.style.display = 'none';
})

let senhaUsuario = document.getElementById("senhaUsuario")
senhaUsuario.addEventListener("focus", function(){

    let cadastroInputSenha = document.querySelector(".cadastroInputSenha")
    cadastroInputSenha.style.display = 'block';

    let cadastroInputEmail = document.querySelector(".cadastroInputEmail")
    cadastroInputEmail.style.display = 'none';

    let cadastroInputNome = document.querySelector(".cadastroInputNome");
    cadastroInputNome.style.display = "none";
})