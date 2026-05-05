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

  if (numero.value <= 1) {
    erro.innerHTML = "Digite um número maior que 1";
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
  let palavra = document.getElementById("palavra");
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

/*
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("numero");

  resultado.innerHTML = resposta;
};
*/

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

/*
const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("numero");

};
*/

//--------------------

const exercicio13 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
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
};

//--------------------

const exercicio25 = () => {
  let resultado = document.getElementById("resultado");
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);
  let n3 = parseInt(document.getElementById("num3").value);
  let erro = document.getElementById("erro");

  let vetor = [n1, n2, n3]

  vetor.sort((a, b) => a - b)
  
  if (n1 == n2 && n1 == n3 && n2 == n3) {
    erro.innerHTML = "Use números diferentes";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = vetor
  }
};
