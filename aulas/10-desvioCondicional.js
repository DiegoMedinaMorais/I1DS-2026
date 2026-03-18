// desvio condicional - IF-ELSE

/* condições simples com IF 
sintaxe: if(condição){
    código a ser executado (se condição bater)
}
*/

let anoNascimento = 2001;

if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003");
}
if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003");
}
if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003");
}

// ----------

if (anoNascimento < 2000) {
  console.log("A pessoa nasceu antes de 2000");
} else {
  console.log("A pessoa nasceu depois de 2000");
}

// ----------

const login = "admin";
const senha = "12345";

let loginUser = "Jóse";
let senhaUser = "1234";

if (loginUser == login && senhaUser == senha) {
  console.log("Login realizado com sucesso");
}

// ----------

if (loginUser == login && senhaUser == senha) {
  console.log("Login realizado com sucesso");
} else {
  console.log("Acesso negado");
}

// desvios aninhados - IF-ELSE-IF-ELSE ...

let semaforo = "amarelo";

if (semaforo == "vermelho") {
  console.log("Pare");
} else if (semaforo == "amarelo") {
  console.log("Atenção");
} else if (semaforo == "verde") {
  console.log("Siga");
} else {
  console.log("Opcão incorreta");
}

// variáveis locais (só existem dentro do bloco onde foram criadas). Escopo de variáveis

let mes = "Agosto";
let dia = "15";

if (dia == 15 && mes == "Agosto") {
  let mensagem = "Hoje é dia 15 de agosto";
  console.log(mensagem);
}

/*
console.log('Tentando acessar variável "mensagem" fora do escopo do IF (erro)');
console.log(mensagem);
*/

// IF ternário (IF inline)

let preco = 500;
let resultado = preco <= 100 ? "Barato" : "Caro";
console.log("Preço:", preco, "-", resultado)
// código acima faz o mesmo que o código abaixo

if (preco <= 100) {
  resultado = "Barato";
} else {
  resultado = "Caro";
}
console.log("Preço:", preco, "-", resultado)