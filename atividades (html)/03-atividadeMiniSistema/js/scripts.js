let n = 0

const remove = (id) => {
    let lista = document.getElementById("lista")
    let elemento = document.getElementById(id)
    lista.removeChild(elemento)

    let contagem = lista.childElementCount
    document.getElementById("contagem").innerText = contagem
}

const edit = (id) => {
    
}

const cadastrar = (event) => {
    // parar a propagaão padrão do evento
    event.preventDefault();


    // capturando  os valores dos campos dos elementos por id
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    // capturando o elemento de lista por id
    let lista = document.getElementById("lista");

    // criar um novo elemento <li>Nome - Email</li>
    let novoItem = document.createElement("li");
    n++
    let id = n
    novoItem.innerHTML = id + " - " + nome + " - " + email + '<button onclick="remove('+ id +')" class="removeButton">Remover</button>' + '<button onclick="edit('+ id +')" class="editButton">Editar</button>';
    novoItem.id = id

    // adicionar o novo item na lista existente
    lista.appendChild(novoItem);

    // limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    let contagem = lista.childElementCount
    document.getElementById("contagem").innerText = contagem
}

