let contador = document.getElementById("contador")
let valorAtual = parseInt(contador.innerHTML);

const adicionar = () => {
    valorAtual++;
    contador.innerHTML = valorAtual;
}

const diminuir = () => {
    valorAtual--;
    contador.innerHTML = valorAtual;
}

const zerar = () => {
    valorAtual = 0
    contador.innerHTML = valorAtual
}

// exercício 2

const mudarCor = () => {
    let color = document.getElementById("colorPicker").value;
    let square = document.getElementById("quadrado")
    square.style.backgroundColor = color
}

// exercício 03

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let resultado = document.getElementById("resultado")

const somar = () => {
    let valor = parseFloat(num1.value) + parseFloat(num2.value)
    resultado.innerHTML = valor
}
const subtrair = () => {
    let valor = parseFloat(num1.value) - parseFloat(num2.value)
    resultado.innerHTML = valor
}
const multiplicar = () => {
    let valor = parseFloat(num1.value) * parseFloat(num2.value)
    resultado.innerHTML = valor
}
const dividir = () => {
    let valor = parseFloat(num1.value) / parseFloat(num2.value)
    if (num1.value == 0 || num2.value == 0) {
        alert("Não é possível dividir")
        return
    }
    resultado.innerHTML = valor
}