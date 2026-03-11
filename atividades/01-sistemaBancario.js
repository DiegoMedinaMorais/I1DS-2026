/***************************************************** 
Exercícios para fixação 
*****************************************************/ 
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/
let nome = "Geraldo";
let nomeBanco = "Banco Dinheirinho";
let numeroAgencia = 8475;
let numeroConta = "98744-3";
let saldoConta = 1000;

console.log(nome, ", esses são os dados da sua conta no", nomeBanco, ":\n", 
    "Número da agéncia:", numeroAgencia, "\n",
    "Número da conta:", numeroConta, "\n",
    "Saldo da conta: R$", saldoConta, "\n"
);

saldoConta = saldoConta + 200
console.log("11/03/2026, 07:48:", nome, ", um pix do Zeca Abobrinha foi recebido na sua conta do", nomeBanco, "no valor de R$ 200 reais. Novo saldo: R$", saldoConta);
saldoConta = saldoConta - 1150
console.log("11/03/2026, 12:32:", nome, ", uma compra foi realizada sua conta do", nomeBanco, "no valor de R$ 1150 reais. Novo saldo: R$", saldoConta);
saldoConta = saldoConta + 50
console.log("13/03/2026, 15:21:", nome, ", um pix da Josefina Andreia foi recebido na sua conta do", nomeBanco, "no valor de R$ 50 reais. Novo saldo: R$", saldoConta);
saldoConta = saldoConta + 700
console.log("14/03/2026, 23:11:", nome, ", um pix do Richarlison Jaca foi recebido na sua conta do", nomeBanco, "no valor de R$ 700 reais. Novo saldo: R$", saldoConta);
saldoConta = saldoConta - 175
console.log("17/03/2026, 09:57:", nome, ", uma compra foi realizada sua conta do", nomeBanco, "no valor de R$ 175 reais. Novo saldo: R$", saldoConta);

console.log("")

console.log(nome, ", esses são os dados da sua conta no", nomeBanco, ":\n", 
    "Número da agéncia:", numeroAgencia, "\n",
    "Número da conta:", numeroConta, "\n",
    "Saldo da conta: R$", saldoConta, "\n"
);