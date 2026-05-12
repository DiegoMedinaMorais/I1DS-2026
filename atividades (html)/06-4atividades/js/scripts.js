// ATIVIDADE 01

let acesa = false;
const ligar = () => {
  let img = document.getElementById("lampada");

  if (acesa == false) {
    img.src = "img/acesa.jpg";
    acesa = true;
  } else {
    img.src = "img/apagada.jpg";
    acesa = false;
  }
};
// -----------------------------------------

// ATIVIDADE 02
const gerarImagem = () => {
  let div = document.getElementById("canvas");
  let quant = document.getElementById("inQtdImg").value;

  for (let i = 0; i < quant; i++) {
    div.innerHTML +=
      '<img src="img/logo.png" alt="Logotipo SENAI" class="imagens">';
  }
};
// -----------------------------------------

//ATIVIDADE 03
const validaForm = () => {
  event.preventDefault();

  /*

  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;

  let erro = document.getElementById("mensagem-erro");

  if (
    inCli == "" ||
    inFone == "" ||
    inMail == "" ||
    inProd == "" ||
    inQtd == 0 ||
    inVal == 0
  ) {
    erro.innerText = "Preencha todos os campos";
    erro.style.display = "block";
  } else if (
    inCli.length < 5 ||
    inFone.length < 5 ||
    inMail.length < 5 ||
    inProd.length < 5
  ) {
    erro.innerText = "Preencha os campos com mais de 5 letras";
    erro.style.display = "block";
  } else if (
    inQtd < 0 ||
    inVal < 0
  ) {
    erro.innerText = "Use valores positivos";
    erro.style.display = "block";
  } else {
    erro.innerText = "";
    erro.style.display = "";
  }

  */

  // do professor

  let erro = document.getElementById("mensagem-erro");
  erro.innerHTML = "";

  let data = inData; // document.getElementByName("inData");
  let nome = inCli; // pega elemento por name
  let fone = inFone;
  let mail = inMail;
  let prod = inProd;
  let qtd = inQtd;
  let val = inVal;

  switch (true) {
    // Verificar se existe algum campo vazio
    // trim tira espaços desnecessários
    case nome.value.trim() == "" ||
      data.value == "" ||
      fone.value.trim() == "" ||
      mail.value.trim() == "" ||
      prod.value.trim() == "" ||
      qtd.value == "" ||
      val.value == "":
      erro.style.display = "block";
      erro.innerHTML = "Erro: O(s) campo(s) não pode(m) estar vazio(s)!";
      break;

    // Verificar se os campos de string contem mais que 5 caracteres
    case nome.value.trim().length < 5 ||
      prod.value.trim().length < 5 ||
      mail.value.trim().length < 5 ||
      fone.value.trim().length < 5:
      erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
      erro.style.display = "block";
      break;

    // Verificar se a quantidade e o valor são positivos (> 0)
    case val.value < 0 || qtd.value < 0:
      erro.style.display = "block";
      erro.innerHTML = "Erro: Este campo não pode ser negativo!";
      break;

    default:
      erro.style.display = "none";
      break;
  }
};
// -----------------------------------------

// ATIVIDADE 04
const calcular = () => {
  let valPedido = Number(inValorPedido.value);
  let perDesconto = 0;
  let valDesconto = 0;
  let valFinalPedido = 0;

  if (valPedido >= 2000) {
    perDesconto = 1.5;
  } else if (valPedido >= 1500) {
    perDesconto = 1;
  } else if (valPedido >= 1000) {
    perDesconto = 0.8;
  } else if (valPedido >= 500) {
    perDesconto = 0.5;
  } else {
    perDesconto = 0;
  }

  valDesconto = (valPedido * perDesconto) / 100;
  valFinalPedido = valPedido - valDesconto;
  inPercDesc.value = perDesconto;
  inValDesc.value = valDesconto.toFixed(2); // o mesmo que documento:getElement... so funciona para campos de form (name)
  inValFinal.value = valFinalPedido.toFixed(2);
};
