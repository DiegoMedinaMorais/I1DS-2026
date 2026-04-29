let n = 0
let infoEmail = [];
let infoNome = [];

const remove = (id) => {
    let lista = document.getElementById("lista")
    let elemento = document.getElementById(id)
    let contagem = lista.childElementCount
    
    lista.removeChild(elemento)

    document.getElementById("contagem").innerText = contagem
}

const edit = (id) => {
    let lista = document.getElementById("lista")
    let elemento = document.getElementById(id)
    let contagem = lista.childElementCount
    let nome = document.getElementById("nome")
    let email = document.getElementById("email")

    lista.removeChild(elemento)

    document.getElementById("contagem").innerText = contagem

    nome.value = infoNome[id-1]
    email.value = infoEmail[id-1]
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

    infoEmail.push(email)
    infoNome.push(nome)

    // adicionar o novo item na lista existente
    lista.appendChild(novoItem);

    // limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    let contagem = lista.childElementCount
    document.getElementById("contagem").innerText = contagem
}

