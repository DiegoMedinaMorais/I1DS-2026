/*
introdução a funções em javaScript
função - uma função em javaScript é um bloco de código reutilizável que executa uma tarefa quando é chamado
*/

function somar(valor1, valor2) {
  return valor1 + valor2;
}

console.log("5 + 2 =", somar(5, 2));
console.log("15 + 32 =", somar(15, 32));

let v1 = 31;
let v2 = 46;
console.log("A soma de v1 + v2 =", somar(v1, v2));

// ----------

function bomDia() {
  console.log("Olá, muito bom dia para você!");
}

bomDia();
bomDia();
bomDia();

// ----------

function apresentarPessoa(nome, idade, cidade) {
  console.log(
    "Apresento a vocês:",
    nome + ", que tem",
    idade,
    "anos, e mora em",
    cidade + ".",
  );
}

apresentarPessoa("Josefino", 31, "Brotas");
apresentarPessoa("Beto", 92, "Jáu");
apresentarPessoa("Geralda", 19, "São Paulo");

// ----------

// função que calcula e retorna o desconto em uma venda
function desconto(valorVenda, percentualDesconto) {
  let valorDoDesconto = valorVenda * (percentualDesconto / 100);
  return valorDoDesconto;
}

let totalPedido = 530;
let totalDesconto = desconto(totalPedido, 10);
let valorFinal = totalPedido - totalDesconto;

console.log("-----------------------------");
console.log("Total do pedido:", totalPedido);
console.log("Total do desconto:", totalDesconto);
console.log("Valor final do pedido:", valorFinal);
console.log("-----------------------------");
