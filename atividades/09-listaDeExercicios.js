/*
PARTE 1 – Variáveis, Operações e Lógica (1 a 10)
1. Crie variáveis para nome, idade e cidade. Exiba uma frase completa.
2. Crie duas variáveis numéricas e exiba:
      soma
      subtração
      multiplicação
      divisão
      resto da divisão
3. Calcule a área de um retângulo.
4. Calcule o volume de um paralelepípedo.
5. Dado o valor de um produto, calcule: 10% de desconto | valor final
6. Converta temperatura de Celsius para Fahrenheit.
7. Calcule o IMC e exiba o valor.
8. Calcule a média de 3 notas.
9. Calcule o delta de uma equação de 2º grau.
10. Dado um valor em horas, converta para minutos e segundos.
*/

console.log(
  "PARTE 1 – Variáveis, Operações e Lógica (1 a 10) ------------------\n",
);

let nome = "Jóse";
let idade = 37;
let cidade = "Jáu";

console.log(
  "Seu nome é",
  nome + ", você tem",
  idade,
  "anos e mora em",
  cidade + ".",
);

let n1 = 10;
let n2 = 7;

console.log("Soma:", n1 + n2 + ".");
console.log("Subtração:", n1 - n2 + ".");
console.log("Multiplicação:", n1 * n2 + ".");
console.log("Divisão:", n1 / n2 + ".");
console.log("Resto da divisão:", (n1 % n2) + ".");

let alturaRetan = 6;
let baseRetan = 5;

console.log(
  "A area de um retângulo com",
  alturaRetan,
  "de altura e",
  baseRetan,
  "de base é:",
  alturaRetan * baseRetan + ".",
);

let compParal = 7;
let alturaParal = 5;
let larguraParal = 8;

console.log(
  "A area de um paralelepípedo com",
  alturaParal,
  "de altura e",
  compParal,
  "de comprimento e",
  larguraParal,
  "de largura é:",
  alturaParal * compParal * larguraParal + ".",
);

let desconto = 10;
let valor = 1000;
let valorDesconto = valor * (desconto / 100);
let valorFinal = valor - valorDesconto;
console.log(
  "Com o desconto de",
  desconto + "% no produto de",
  valor,
  "reais, o valor retirado pelo desconto é de",
  valorDesconto + ", e o valor final será de",
  valorFinal,
  "reais.",
);

let temperaturaCelsius = 100;
console.log(
  "A temperatura",
  temperaturaCelsius,
  "(Celsius) para Fahrenheit é:",
  temperaturaCelsius * 1.8 + 32 + ".",
);

let altura = 1.7;
let massa = 70;

console.log("Seu IMC é de", massa / (altura * altura) + ".");

let nota1 = 7;
let nota2 = 9;
let nota3 = 5;

console.log(
  "Nesse ano você tirou",
  nota1 + ",",
  nota2 + ",",
  nota3 + ", sua média final é de:",
  (nota1 + nota2 + nota3) / 3 + ".",
);

// fórmula delta: delta = b² - 4ac

let a = 1;
let b = -8;
let c = 12;
let delta = b * b - 4 * a * c;
console.log(
  "O delta de uma equação de segundo grau com a =",
  a + ", b =",
  b + ", e c =",
  c,
  "é igual a:",
  delta + ".",
);

let horas = 2;
let minutos = horas * 60;
let segundos = minutos * 60;
console.log(
  horas,
  "horas é igual a",
  minutos,
  "minutos e",
  segundos,
  "segundos.",
);

/*
PARTE 2 – Condicionais (IF) (11 a 20)
11. Verifique se um número é positivo, negativo ou zero.
12. Verifique se um número é par ou ímpar.
13. Dado um número, verifique se é múltiplo de 3.
14. Verifique se um aluno foi:
       Aprovado (≥ 7)
       Recuperação (≥ 5 e < 7)
       Reprovado (< 5)
15. Verifique se uma pessoa pode votar (use regras reais).
16. Verifique se um número está entre 10 e 50.
17. Crie um sistema de login simples (usuário e senha).
18. Verifique o maior entre dois números.
19. Verifique o maior entre três números.
20. Classifique a idade:
       Criança
       Adolescente
       Adulto
       Idoso
*/

console.log("");
console.log("PARTE 2 – Condicionais (IF) (11 a 20) ------------------\n");

let numero1 = 5;
if (numero1 < 0) console.log("O número", numero1, "é negativo.");
else if (numero1 == 0) console.log("O número", numero1, "é zero.");
else console.log("O número", numero1, "é positivo.");

let numero2 = 4;
if (numero2 % 2 == 0) console.log("O número", numero2, "é par.");
else console.log("O número", numero2, "é ímpar.");

let numero3 = 12;
if (numero3 % 3 == 0) console.log("O número", numero3, "é múltiplo de 3.");
else console.log("O número", numero3, "não é múltiplo de 3.");

let nota = 6;
if (nota >= 7) console.log("Aluno foi aprovado com nota", nota + ".");
else if (nota >= 5)
  console.log("Aluno tirou nota", nota + ", necessita recuperação.");
else console.log("Aluno foi reprovado com nota", nota + ".");

let idade2 = 15;
if (idade2 < 18 || idade2 >= 70)
  console.log("Você tem", idade2, "anos, voto facultativo.");
else console.log("Você tem", idade2, "anos, voto obrigatório.");

let numero4 = 32;
if (numero4 > 10 && numero4 < 50)
  console.log("Número", numero4, "está entre 10 e 50.");
else console.log("Número", numero4, "não está entre 10 e 50.");

let userSalvo = "Roberto";
let senhaSalvo = 0984;
let userDigitado = "Abóbora";
let senhaDigitada = 1234;

if (userDigitado == userSalvo && senhaDigitada == senhaSalvo)
  console.log("Você entrou no sistema.");
else console.log("Acesso negado.");

let numero5 = 33;
let numero6 = 14;

if (numero5 > numero6)
  console.log("Número", numero5, "é maior que", numero6 + ".");
else console.log("Número", numero6, "é maior que", numero5 + ".");

let numero7 = 27;
let numero8 = 82;
let numero9 = 90;

if (numero7 > numero8 && numero7 > numero9)
  console.log("Número", numero7, "é maior que", numero8, "e", numero9 + ".");
else if (numero8 > numero7 && numero8 > numero9)
  console.log("Número", numero8, "é maior que", numero7, "e", numero9 + ".");
else console.log("Número", numero9, "é maior que", numero7, "e", numero8 + ".");

let idade3 = 15;

if (idade3 < 12) console.log("Você tem", idade3, "anos e é uma criança.");
else if (idade3 >= 12 && idade3 < 18)
  console.log("Você tem", idade3, "anos e é um adolescente.");
else if (idade3 >= 18 && idade3 < 60)
  console.log("Você tem", idade3, "anos e é um adulto.");
else console.log("Você tem", idade3, "anos e é um idoso.");

/*
PARTE 3 – Switch Case (21 a 25)
21. Dado um número de 1 a 7, exiba o dia da semana.
22. Dado um mês (1 a 12), exiba o nome do mês.
23. Dado um mês, informe o trimestre.
24. Crie um menu simples:
       1: Somar
       2: Subtrair
       3: Multiplicar
       4: Dividir
25. Sistema de avaliação:
       A → Excelente
       B → Bom
       C → Regular
       D → Ruim
*/

console.log("");
console.log("PARTE 3 – Switch Case (21 a 25) ------------------\n");

let dia = 3;
switch (dia) {
  case 1:
    console.log("O dia da semana é domingo.");
    break;
  case 2:
    console.log("O dia da semana é segunda-feira.");
    break;
  case 3:
    console.log("O dia da semana é terça-feira.");
    break;
  case 4:
    console.log("O dia da semana é quarta-feira.");
    break;
  case 5:
    console.log("O dia da semana é quinta-feira.");
    break;
  case 6:
    console.log("O dia da semana é sexta-feita.");
    break;
  case 7:
    console.log("O dia da semana é sábado.");
    break;

  default:
    console.log("O dia foi selecionado incorretamente.");
    break;
}

let mes = 11;
switch (mes) {
  case 1:
    console.log("Mês janeiro.");
    break;
  case 2:
    console.log("Mês fevereiro.");
    break;
  case 3:
    console.log("Mês março.");
    break;
  case 4:
    console.log("Mês abril.");
    break;
  case 5:
    console.log("Mês maio.");
    break;
  case 6:
    console.log("Mês junho.");
    break;
  case 7:
    console.log("Mês julho.");
    break;
  case 8:
    console.log("Mês agosto.");
    break;
  case 9:
    console.log("Mês setembro.");
    break;
  case 10:
    console.log("Mês outubro.");
    break;
  case 11:
    console.log("Mês novembro.");
    break;
  case 12:
    console.log("Mês dezembro.");
    break;

  default:
    console.log("O número do mês foi selecionado incorretamente.");
    break;
}

let mes2 = 5;
switch (mes2) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("1° trimestre.");
    break;
  case 5:
  case 6:
  case 7:
  case 8:
    console.log("2° trimestre.");
    break;
  case 9:
  case 10:
  case 11:
  case 12:
    console.log("3° trimestre.");
    break;

  default:
    console.log("O número do mês foi selecionado incorretamente.");
    break;
}

let selecao = 1;

switch (selecao) {
  case 1:
    console.log("Menu somar foi selecionado.");
    break;
  case 2:
    console.log("Menu subtrair foi selecionado.");
    break;
  case 3:
    console.log("Menu multiplicar foi selecionado.");
    break;
  case 4:
    console.log("Menu dividir foi selecionado.");
    break;
  default:
    console.log("Não foi possível encontrar esse menu.");
    break;
}

let avaliacao = "A";

switch (avaliacao) {
  case "A":
    console.log("Seu resultado foi", avaliacao + ", excelente.");
    break;
  case "B":
    console.log("Seu resultado foi", avaliacao + ", bom.");
    break;
  case "C":
    console.log("Seu resultado foi", avaliacao + ", regular.");
    break;
  case "D":
    console.log("Seu resultado foi", avaliacao + ", ruim.");
    break;

  default:
    console.log("Não foi possível encontrar seu resultado.");
    break;
}

/*
PARTE 4 – Laço FOR (26 a 35) 🚨
(TODOS DEVEM USAR for)
26. Exiba números de 1 a 100.
27. Exiba números de 100 até 1.
28. Exiba apenas números pares de 1 a 50.
29. Exiba apenas números ímpares de 1 a 50.
30. Calcule a soma de 1 até 100.
31. Calcule o fatorial de um número.
32. Exiba a tabuada de um número.
33. Conte quantos números pares existem entre 1 e 100.
34. Exiba todos os múltiplos de 5 entre 0 e 100.
35. Crie um programa que desenhe no console:
       *
       **
       ***
       ****
       *****
*/

console.log("");
console.log("PARTE 4 – Laço FOR (26 a 35) ------------------\n");

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 101; i == 1; i--) {
  console.log(i);
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) console.log(i);
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 != 0) console.log(i);
}

let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(soma);

let nParaFat = 15;
let fatorial = 1;

for (let i = 1; i <= nParaFat; i++) {
  fatorial *= i;
}
console.log(fatorial);

let nParaTab = 2;

for (let i = 1; i <= 10; i++) {
  console.log(nParaTab * i);
}

let somaPar = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) somaPar++;
}

console.log("Entre 1 e 100 há", somaPar, "numeros pares.");

let somaMult5 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) somaMult5++;
}

console.log("Entre 1 e 100 há", somaMult5, "numeros múltiplos de 5.");

for (let i = 0; i < 10; i++) {
  let ast = "";
  for (let i2 = 0; i2 < i; i2++) {
    ast += "*";
  }
  console.log(ast);
}

/*
PARTE 5 – Vetores (36 a 42) 🚨
(USAR for)
36. Crie um vetor com 10 números e exiba todos.
37. Calcule a soma dos elementos do vetor. 
38. Calcule a média do vetor.
39. Encontre o maior valor do vetor.
40. Encontre o menor valor do vetor.
41. Conte quantos números são pares e ímpares.
42. Multiplique todos os elementos por 2.
*/

console.log("");
console.log("PARTE 5 – Vetores (36 a 42) ------------------\n");

let array = [10, 8, 9, 7, 6, 4, 2, 6, 8, 17];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let soma2 = 0

for (let i = 0; i < array.length; i++) {
  soma2+=array[i]
}
console.log(soma2)

let soma3 = 0

for (let i = 0; i < array.length; i++) {
  soma3+=array[i]
}
console.log(soma3/array.length)

let maiorNumero = 0

for (let i = 0; i < array.length; i++) {
  if (array[i] > maiorNumero) {
    maiorNumero = array[i]
  }
}

console.log(maiorNumero)

let menorNumero2 = 99999

for (let i = 0; i < array.length; i++) {
  if (array[i] < menorNumero2) {
    menorNumero2 = array[i]
  }
}

console.log(menorNumero2)
