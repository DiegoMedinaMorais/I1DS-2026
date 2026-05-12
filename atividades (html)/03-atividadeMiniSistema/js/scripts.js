let n = 0;
let infoEmail = [];
let infoNome = [];

const remove = (id) => {
  let lista = document.getElementById("lista");
  let elemento = document.getElementById(id);
  let contagem = lista.childElementCount;

  lista.removeChild(elemento);

  document.getElementById("contagem").innerText = contagem - 1;
};

const edit = (id) => {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");

  nome.value = infoNome[id - 1];
  email.value = infoEmail[id - 1];
};

const cadastrar = () => {
  // parar a propagaão padrão do evento
  event.preventDefault();

  // capturando  os valores dos campos dos elementos por id
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  // capturando o elemento de lista por id
  let lista = document.getElementById("lista");

  // criar um novo elemento <li>Nome - Email</li>
  let novoItem = document.createElement("li");
  n++;
  let id = n;
  novoItem.innerHTML =
    id +
    " - " +
    nome +
    " - " +
    email +
    '<button onclick="remove(' +
    id +
    ')" class="removeButton">Remover</button>' +
    '<button onclick="edit(' +
    id +
    ')" class="editButton">Editar</button>';
  novoItem.id = id;

  infoEmail.push(email);
  infoNome.push(nome);

  // adicionar o novo item na lista existente
  lista.appendChild(novoItem);

  // limpar os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";

  let contagem = lista.childElementCount;
  document.getElementById("contagem").innerText = contagem;
};

let n2 = 0;
let soma = 0;

const adicionarProduto = () => {
  let prod = document.getElementById("produto");
  let qtd = document.getElementById("quantidade");
  let val = document.getElementById("valor");
  let n3 = n2 + "a"; // adicionei "a" no final do número (que será o id) pois já usei id com somente número nas funções acima.

  let table = document.getElementById("tabelaProdutos");
  let tbody = table.lastElementChild;

  tbody.innerHTML +=
    "<tr><td>" +
    prod.value +
    "</td><td>" +
    qtd.value +
    "</td><td>" +
    val.value +
    "</td><td id='" +
    n3 +
    "'>" +
    val.value * qtd.value +
    "</td></tr>";
  n2 += 1;
};

const finalizarCompra = () => {
  soma = 0;
  let total = document.getElementById("total");

  total.innerHTML = document;
  for (let i = 0; i < n2; i++) {
    let a = document.getElementById(i + "a");
    soma += Number(a.innerHTML);
  }

  total.innerHTML = soma.toFixed(2);
  alert("Compra realizada com sucesso")
};

const aplicarDesconto = () => {
  let descReais = document.getElementById("descontoValor");
  let descPorc = document.getElementById("descontoPercentual");
  let valorLiq = document.getElementById("valorLiquido");

  if (descPorc.value != "" && descReais.value != "") {
    alert("Somente uma opção de desconto é permitida")
  } else if (descPorc.value != "") {
    valorLiq.innerHTML = (soma - (descPorc.value / 100) * soma).toFixed(2);
  } else if (descReais.value != "") {
    valorLiq.innerHTML = (soma - descReais.value).toFixed(2);
  }
};
