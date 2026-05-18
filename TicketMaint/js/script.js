const form =
document.getElementById("formChamado");

const lista =
document.getElementById("listaChamados");

let chamados = [];

form.addEventListener("submit", (e)=>{

  e.preventDefault();

  const chamado = {

    maquina:
    document.getElementById("maquina").value,

    setor:
    document.getElementById("setor").value,

    gravidade:
    document.getElementById("gravidade").value,

    descricao:
    document.getElementById("descricao").value,

    status:"Aberto"
  };

  chamados.push(chamado);

  mostrarChamados();

  form.reset();

});

function mostrarChamados(){

  lista.innerHTML = "";

  chamados.forEach((c,index)=>{

    lista.innerHTML += `

      <div class="card">

        <h2>${c.maquina}</h2>

        <p><strong>Setor:</strong> ${c.setor}</p>

        <p><strong>Gravidade:</strong> ${c.gravidade}</p>

        <p>${c.descricao}</p>

        <p><strong>Status:</strong> ${c.status}</p>

        <button onclick="finalizar(${index})">
          Finalizar
        </button>

      </div>

    `;
  });

}

function finalizar(index){

  chamados[index].status = "Finalizado";

  mostrarChamados();

}