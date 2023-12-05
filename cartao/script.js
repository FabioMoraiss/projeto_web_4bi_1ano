let form = document.querySelector("form");
let containerCartao = document.querySelector("#container_cartao")
let elementoCartao = document.querySelector("#cartao")
let cartaoCopiar = "caso de falha";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let numeroCartao = gerarNumeroCartao();
    elementoCartao.innerHTML= numeroCartao;
    containerCartao.classList.remove("esconder");

})

function gerarNumeroCartao() {
    let NumeroCartao = gerarNumeroArray();
   

    let acumulador=1;

    let numeroString ="";
    NumeroCartao.forEach(indice => {
        numeroString+=indice;

        if(acumulador % 4 ==0 && acumulador != 16) {
            numeroString+=" "
        }
        acumulador++
        
    });

    cartaoCopiar = NumeroCartao.join('');

    return numeroString;

}

function gerarNumeroArray(){
    let numeros =[];
    for(let i =0; i<16; i++) {
        if(i == 0) {
            numeros[i] = gerarPrimeiroDigito();
        } else if(i== 15) {
            numeros[i] = gerarDigitoVerificador(numeros)
        } else {
            numeros[i] = gerarNumerosDoMeio();
        }
    }

    return numeros;

}

function gerarPrimeiroDigito() {

    const aleatorio = Math.random();
  
    // Multiplica o número aleatório por 3 para obter um número entre 0 e 3
    const numero = Math.floor(aleatorio * 3) + 3; // Adiciona 3 para obter 3, 4 ou 5
  
    return numero;
}


function gerarNumerosDoMeio() {
    return Math.floor(Math.random() * 10);
}

function gerarDigitoVerificador(cartao) {
    let acumulador =0;
    let resultadoMultiplicacao;
    let multiplicador1= 1;
    let multiplicador2 = 2;

    for(let i =0; i<cartao.length; i++) {
        if(i % 2== 0) {
            resultadoMultiplicacao = cartao[i] * multiplicador2;
        } else{
            resultadoMultiplicacao = cartao[i] * multiplicador1;
        }

        if(resultadoMultiplicacao >= 10) {
            resultadoMultiplicacao = somaDigitos(resultadoMultiplicacao);
        }

        acumulador+= resultadoMultiplicacao;
    }

    acumulador= ultimoDigito(acumulador);

    if(acumulador % 10 ==0) {
        acumulador = 0
    } else {
        acumulador = 10 - acumulador;
    }

    return acumulador


}


function somaDigitos(numero) {
    let numString = numero.toString();
  
    let soma = 0;
  
    // Itera sobre cada dígito na string e adiciona à soma
    for (let i = 0; i < numString.length; i++) {
      soma += parseInt(numString[i]); // Converte cada dígito de volta para número e adiciona à soma
    }
  
    return soma;
}


function ultimoDigito(numero) {
    const ultimo = numero % 10;
    return ultimo;
}




function copiarCartao() {
    navigator.clipboard.writeText(cartaoCopiar);
    alert("cartao copiado com sucesso")
    
}