const exercicio1 = () => {
  let resposta = document.getElementById("resposta");

  let resultado = " | ";

  for (let i = 0; i <= 10; i++) {
    resultado += i + " | ";
  }

  resposta.innerHTML = resultado;
};

//--------------------

const exercicio2 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num");

  let resposta = " | ";

  for (let i = 0; i <= numero.value; i++) {
    if (i % 2 == 0) {
      resposta += i + " | ";
    }
  }

  if (numero.value <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = resposta;
  }
};

//--------------------

const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num");
  let a = true;

  for (let i = 2; i < numero.value; i++) {
    if (numero.value % i == 0) {
      a = false;
      break;
    }
  }

  let resposta = "";
  if (numero.value > 1 && numero.value % numero.value == 0 && a) {
    resposta = `${numero.value} é um número primo.`;
    erro.innerHTML = "";
  } else if (numero.value <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resposta.innerHTML = "";
  } else {
    resposta = `${numero.value} NÃO é um número primo.`;
    erro.innerHTML = "";
  }
  resultado.innerHTML = resposta;
};

//--------------------

const exercicio4 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num");

  let resposta = " | ";

  for (let i = 1; i <= 10; i++) {
    resposta += numero.value * i + " | ";
  }

  if (numero.value <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = resposta;
  }
};

//--------------------

const exercicio5 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num");

  let resposta = " | ";

  let i = 1;

  while (i != numero.value) {
    if (i % 2 != 0) {
      resposta += i + " | ";
    }
    i++;
  }

  if (numero.value <= 1) {
    erro.innerHTML = "Digite um número maior que 1";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = resposta;
  }
};

//--------------------

const exercicio6 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num");

  let resposta = 0;

  let i = 1;

  while (i <= numero.value) {
    if (i % 2 == 0) {
      resposta += i;
    }
    i++;
  }

  if (numero.value <= 1) {
    erro.innerHTML = "Digite um número maior que 1";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = resposta;
  }
};

//--------------------

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");

  let string = " | ";

  let i = 10;

  while (i >= 1) {
    string += i + " | ";
    i--;
  }

  resposta.innerHTML = string;
};

//--------------------

const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;

  // limpar os campos da tela caso tenha alguma coisa

  erro.innerHTML = "";
  resultado.innerHTML = "";

  // variável para armazenar a palavra invertida
  let palavraInvertida = "";

  // loop de 1 até o "tamanho" da palavra
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  // exibir a palavra invertida no resultado

  resultado.innerHTML = `A palavra invertida é: ${palavraInvertida}`;
  erro.innerHTML = "";

  if (palavra == palavraInvertida) {
    resultado.innerHTML += "<br/> A palavra é um palíndromo";
  } else {
    resultado.innerHTML += "<br/> A palavra não é um palíndromo";
  }
};

//--------------------

const exercicio9 = () => {
  let resposta = document.getElementById("resposta");

  let soma = 0;

  for (let i = 0; i <= 100; i++) {
    soma += i;
  }

  resposta.innerHTML = soma;
};

//--------------------

let soma = 0;
let contador = 0;
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  /*
  if (numero != 0) {
    soma += parseFloat(numero)
    contador++
  }

  resultado.innerHTML = `A média dos números digitados é: ${soma/contador}`;
  erro.innerHTML = ""
  */

  while (numero != "0") {
    soma += parseFloat(numero);
    contador++;
    numero = prompt("Digite um número: ");
  }

  if (contador > 0) {
    resultado.innerHTML = `Foram digitados ${contador} números. A média da soma dos números digitados é: ${soma / contador}`;
    erro.innerHTML = "";
  }

  contador = 0;
  soma = 0;
};

//--------------------

const exercicio11 = () => {
  let resposta = document.getElementById("resposta");

  let string = "";

  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
      string += i + " | ";
    }
  }

  resposta.innerHTML = string;
};

//--------------------

const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let soma = 0;

  for (let i = 0 - 1; i <= numero.length - 1; i++) {
    soma += parseInt(numero[i]);
  }
  if (soma > 0) {
    resultado.innerHTML = `A soma dos dígitos desse número é: ${soma}`;
    erro.innerHTML = "";
  } else {
    erro.innerHTML = "Digite um número maior que 0";
    resultado = "";
  }
};

//--------------------

const exercicio13 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  // ao inves de parseInt poderia usar Number(), mesmo propósito.
  let numero1 = parseInt(document.getElementById("num1").value);
  let numero2 = parseInt(document.getElementById("num2").value);

  let resposta = " | ";
  let a = true;

  for (let i = numero1; i <= numero2; i++) {
    for (let i2 = 2; i2 < i; i2++) {
      if (i % i2 == 0) {
        a = false;
      }
    }
    if (i % i == 0 && i > 1 && a) {
      resposta += i + " | ";
    }
    a = true;
  }

  if (numero1 == numero2 || numero1 > numero2) {
    resultado.innerHTML = "";
    erro.innerHTML =
      "Os números devem ser diferentes e o primeiro número deve ser menor que o segundo.";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = resposta;
  }
};

//--------------------

const exercicio14 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let lado1 = parseInt(document.getElementById("num1"));
  let lado2 = parseInt(document.getElementById("num2"));

  let resposta = `Seu retángulo tem área: ${lado1 * lado2}`;

  if (lado1 <= 0 || lado2 <= 0) {
    resultado.innerHTML = "";
    erro.innerHTML = "Digite números maiores que 0";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = resposta;
  }
};

//--------------------

const exercicio15 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;

  let vogais = ["a", "e", "i", "o", "u"];

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (palavra.length < 1) {
    erro.innerHTML = "Digite no mínimo uma letra";
    resultado.innerHTML = "";
  } else {
    palavra = palavra.toLowerCase(); // Transforma o texto em letras minúsculas
    for (let i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i])) {
        resultado.innerHTML += `A letra <b>${palavra[i]}</b> é uma vogal <br>`;
      } else {
        resultado.innerHTML += `A letra <b>${palavra[i]}</b> não é uma vogal <br>`;
      }
    }
  }
};

//--------------------

const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let raio = parseInt(document.getElementById("num1").value);

  if (raio <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = Math.PI * raio * raio;
  }
};

//--------------------

const exercicio17 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let base = parseInt(document.getElementById("num1").value);
  let altura = parseInt(document.getElementById("num2").value);

  let resposta = `Seu triângulo tem área: ${(base * altura) / 2}`;

  if (base <= 0 || altura <= 0) {
    resultado.innerHTML = "";
    erro.innerHTML = "Digite números maiores que 0";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = resposta;
  }
};

//--------------------

const exercicio18 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let baseMaior = parseInt(document.getElementById("num1").value);
  let baseMenor = parseInt(document.getElementById("num2").value);
  let altura = parseInt(document.getElementById("num3").value);

  let resposta = `Seu trapézio tem área: ${((baseMaior + baseMenor) * altura) / 2}`;

  if (baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
    resultado.innerHTML = "";
    erro.innerHTML = "Digite números maiores que 0";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = resposta;
  }
  p;
};

//--------------------

const exercicio19 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let letra = document.getElementById("letra").value;
  let vogais = ["a", "e", "i", "o", "u"];
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (letra.length > 1) {
    erro.innerHTML = "Digite apenas um caracter.";
    resultado.innerHTML = "";
  } else if (palavra.length < 1) {
    erro.innerHTML = "Digite uma palavra.";
    resultado.innerHTML = "";
  } else {
    let palavraVetor = palavra.split(""); // Quebra a frase em varias palavras
    for (let i = 0; i < palavraVetor.length; i++) {
      if (vogais.includes(palavraVetor[i])) {
        palavraVetor[i] = letra;
      }
    }
    palavra = palavraVetor.join(""); // Junta novamente as palavras
    resultado.innerHTML = `A palavra resultante é: ${palavra}`;
    erro.innerHTML = "";
  }
};

//--------------------

// errado, inverte letras, o certo seria inverter as palavras da frase
/*
const exercicio20 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;

  // limpar os campos da tela caso tenha alguma coisa

  erro.innerHTML = "";
  resultado.innerHTML = "";

  // variável para armazenar a frase invertida
  let fraseInvertida = "";

  // loop de 1 até o "tamanho" da frase
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }

  // exibir a frase invertida no resultado

  resultado.innerHTML = `A frase invertida é: ${fraseInvertida}`;
  erro.innerHTML = "";
};
*/

const exercicio20 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma palavra";
    resultado.innerHTML = "";
  } else {
    let fraseInvertida = frase.split(" ").reverse().join(" ");
    resultado.innerHTML = `A frase resultante é ${fraseInvertida}`;
    erro.innerHTML = "";
  }
};

//--------------------

// tentativa
/*
const exercicio21 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;

  // limpar os campos da tela caso tenha alguma coisa

  erro.innerHTML = "";
  resultado.innerHTML = "";

  // variável para armazenar a frase nova
  let fraseNova = frase;

  for (let i = 0; i >= frase.length - 1; i++) {
    if (fraseNova[i] = " ") {
      fraseNova[i] = "";
    }
  }

  // exibir a frase nova no resultado
  resultado.innerHTML = `Sua frase sem espaços é: ${fraseNova}`;
  erro.innerHTML = "";
};
*/

const exercicio21 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma palavra";
    resultado.innerHTML = "";
  } else {
    let novaFrase = frase.split(" ").join("");
    resultado.innerHTML = `A frase resultante é ${novaFrase}`;
    erro.innerHTML = "";
  }
};

//--------------------

soma = 0;
contador = 0;
const exercicio22 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (soma < 100) {
    soma += parseFloat(numero);
    resultado.innerHTML = `A soma dos números digitados é: ${soma}`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `A soma já atingiu o limite de 100, o total é: ${soma}`;
    erro.innerHTML = "";
  }
};

//--------------------

const exercicio23 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let frase = document.getElementById("frase").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1 || palavra.length < 1) {
    erro.innerHTML = "Digite uma frase e uma palavra para realizar a contagem.";
    resultado.innerHTML = "";
  } else {
    let palavrasNaFrase = frase.split(" ");
    let contador = 0;
    for (let i = 0; i < palavrasNaFrase.length; i++) {
      if (palavrasNaFrase[i] == palavra) {
        contador++;
      }
    }
    resultado.innerHTML = `A palavra "${palavra}" aparece ${contador} vez(es) na frase.`;
    erro.innerHTML = "";
  }
};

//--------------------

const exercicio24 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma frase para converter.";
    resultado.innerHTML = "";
  } else {
    let palavras = frase.split(" ");
    let fraseNova = palavras
      .map((palavra) => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
      })
      .join(" ");
    resultado.innerHTML = `A frase resultante é: ${fraseNova}`;
    erro.innerHTML = "";
  }
};

//--------------------

const exercicio25 = () => {
  let resultado = document.getElementById("resultado");
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);
  let n3 = parseInt(document.getElementById("num3").value);
  let erro = document.getElementById("erro");

  let vetor = [n1, n2, n3];

  // sort organiza os elementos do array do jeito que eu quiser, nesse caso, ordem crescente
  // ordem crescente: (a, b) => a - b
  // ordem decrescente: (a, b) => b - a

  vetor.sort((a, b) => a - b);

  if (n1 == n2 && n1 == n3 && n2 == n3) {
    erro.innerHTML = "Use números diferentes";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = vetor;
  }
};
