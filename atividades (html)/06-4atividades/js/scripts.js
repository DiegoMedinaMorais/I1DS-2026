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
    div.innerHTML += '<img src="img/logo.png" alt="Logotipo SENAI" class="imagens">';
  }
};
// -----------------------------------------

//ATIVIDADE 03
const validaForm = () => {

event.preventDefault()

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
    erro.style.display = "block";
    erro.innerText += "Preencha todos os campos";
  }
};
// -----------------------------------------

// ATIVIDADE 04
const calcular = () => {};
