
function olaMundo(){
    alert("Olá Mundo!")
}

// Arrow function
/*
const olaMundo = () => {
    alert("Olá Mundo! JS com arrow function!")
}
*/

const mudarTexto = () => {
    let elementoAlvo = document.getElementById("texto")
    elementoAlvo.innerHTML = "Novo texto com JS 🔥🔥🔥"
    elementoAlvo.style.color = "orange"
    elementoAlvo.style.backgroundColor = "red"
}

const enviarNome = () => {
    let nomeDigitado = document.getElementById("nome").value;
    alert("Olá " + nomeDigitado)

    /*
    let nomeDigitado = document.getElementsByName("nome").value;
    alert("Olá " + nomeDigitado)
    */
}

const somar = () => {
    event.preventDefault();

    let numero1 = parseInt(document.getElementById("n1").value);
    let numero2 = parseInt(document.getElementById("n2").value);

    let result = numero1+numero2;

    alert(result);

    document.getElementById("resultado").innerHTML = result;
}