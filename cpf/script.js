let form = document.querySelector("form");
let containerCPF = document.querySelector("#container_cpf")
let elementoCPF = document.querySelector("#cpf")
let cpfCopiar = "caso de falha";


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let cpf = gerarCpf();
    elementoCPF.innerHTML= cpf;
    containerCPF.classList.remove("esconder");

})

function gerarCpf() {
    let cpf = gerarPrimeirosDigitos();
   
    cpf.push(gerarPrimeiroDigitoVerificador(cpf));
    cpf.push(gerarSegundoDigitoVerificador(cpf));

    let acumulador=1;

    let cpfString ="";
    cpf.forEach(indice => {
        cpfString+=indice;

        if(acumulador == 3 || acumulador== 6) {
            cpfString+="."
        }

        if(acumulador== 9) {
            cpfString+='-'
        }
        acumulador++
        
    });

    cpfCopiar = cpf.join('');

    return cpfString;

    


}

function gerarPrimeirosDigitos(){
    let numeros =[];
    for(let i =0; i<9; i++) {
        numeros[i] = Math.floor(Math.random() * 10);
    }

    return numeros;

}

function gerarPrimeiroDigitoVerificador(cpf) {
    let acumulador =0;
    let multiplicador = 10;
    //gerar primeiro digito verificador
    cpf.forEach(function(numero){
        acumulador += numero * multiplicador;
        multiplicador--;
    })

    resto = acumulador % 11;

    if(resto == 1 || resto  == 0 )  {
        return 0;
    } else {
        return 11 - resto;
    }
}

function gerarSegundoDigitoVerificador(cpf) {
    let acumulador =0;
    let multiplicador = 11;
    //gerar primeiro digito verificador
    cpf.forEach(function(numero){
        acumulador += numero * multiplicador;
        multiplicador--;
    })

    resto = acumulador % 11;

    if(resto == 1 || resto  == 0 )  {
        return 0;
    } else {
        return 11 - resto;
    }
}

function copiarCPF() {
    navigator.clipboard.writeText(cpfCopiar);
    alert("senha copiada com sucesso")
    
}