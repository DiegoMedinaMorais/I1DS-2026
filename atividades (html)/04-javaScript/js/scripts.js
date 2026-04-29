let contador = document.getElementById("contador")

const adicionar = () => {
    let valorAtual = parseInt(contador.innerHTML);
    valorAtual++;
    contador.innerHTML = valorAtual;
}

const diminuir = () => {
    let valorAtual = parseInt(contador.innerHTML);
    valorAtual--;
    contador.innerHTML = valorAtual;
}

