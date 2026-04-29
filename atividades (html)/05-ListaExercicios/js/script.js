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

/*
const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra");

  resultado.innerHTML = resposta;
};
*/

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

const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("numero");
};

//--------------------

const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num1").value;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    resultado.innerHTML = Math.PI * parseFloat(numero) * parseFloat(numero);
  }
};

const exercicio25 = () => {};
