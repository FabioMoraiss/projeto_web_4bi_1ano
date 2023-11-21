//pegando elementos HTML
let elementoSlider = document.querySelector("#slider");
let tamanhoSenha = document.querySelector("#valor");
let containerInput = document.querySelector("#container_input");
let senha = document.querySelector("#senha");
let containerSenha = document.querySelector("#container_senha");


//criando variaveis globais
let alfabeto="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let senhaCopiada="nao deu certo";

//setaro numero do html
tamanhoSenha.innerHTML = elementoSlider.value;

//mudar o numero dinamicamente
elementoSlider.oninput = function() {
    tamanhoSenha.innerHTML = this.value;

    let pass = gerarSenhaAleatoria(this.value);
    containerSenha.classList.remove("esconder");
    senha.innerText = pass;
    senhaCopiada= pass;

}

containerInput.addEventListener("submit", (e) =>{
    e.preventDefault();

    let pass = gerarSenhaAleatoria(elementoSlider.value);
    containerSenha.classList.remove("esconder");
    senha.innerText = pass;
    senhaCopiada= pass;

})

function gerarSenhaAleatoria(tamanho) {
    let pass =""
    for(let i =0; i<tamanho; i++) {
        pass+= alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
    }

    return  pass;
}

function copiarSenha() {
    navigator.clipboard.writeText(senhaCopiada);
    alert("senha copiada com sucesso")
    
}
 