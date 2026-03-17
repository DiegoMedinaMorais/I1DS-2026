// comentário em linha

/*
comentário
de várias
linhas
*/

console.log("Imprime informações na tela");
// escrever clg e dar enter completa com console.log()

/*
variáveis:

sintaxe: let tipo-variavel = valor-variavel;
exemplo: let idade = 45;
*/

/*
tipos dados primários:

números inteiros (int) = 10
números decimais (double) = 8.53
caractéres alfanúmeros (string) = "texto"
números booleanos (bool) = false;
*/
let idade = 45;
let salario = 25864.57;
let eProfessor = false;
let nome = "João da Silva";

console.log("Nome:", nome, "Idade:", idade, "Salário:", salario);

/*
operadores matemáticos:

+ - adição
- - subtração
* - multiplicação
/ - divisão
% - resto da divisão
*/
let num1 = 10;
let num2 = 7;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDaDivisao = num1 % num2;

// imprimindo as operações
console.log("Somando", num1, "+", num2, "=", soma);
console.log("Resto da divisão do", num1, "por", num2, "=", restoDaDivisao);

/*
operadores de comparação

== - comparação de igualdade
!= - diferente
> - maior que
< - menor que
>= - maior ou igual
<= - menor ou igual
=== - exatamente igual (valor e tipo de variável)

retorna true ou false 
*/
console.log("O número 1 é igual ao número 2?", num1 == num2);
console.log("O número 1 é maior ou igual ao número 2?", num1 >= num2);
console.log("O número 1 é menor que o número 2?", num1 < num2);

/*
operadores lógicos

&& (AND) - retorna true ou false se todas as clausulas forem verdadeiras
|| (OR) - retorna true ou false se uma das clausulas forem verdadeiras
! (NOT) - operador de negação (inverte o valor lógico)
*/
let sexo = "Feminino";
let idadeAluno = 17;

console.log(
  "É sexo masculino ou tem 17 ou mais anos de idade?",
  sexo == "Masculino" || idadeAluno >= 17,
);

// concatenando strings

let n1 = "20";
let n2 = 10;

console.log(n1+n2);
console.log("20"+n2);

let nome1 = "Cristiano";
let nome2 = " de Paula";

console.log(nome1+nome2);
