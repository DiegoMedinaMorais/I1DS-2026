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

let nome = "Jóse";
let idade = 37;
let cidade = "Jáu";

console.log("Seu nome é", nome + ", você tem", idade, "anos e mora em", cidade);

let n1 = 10;
let n2 = 7;

console.log("Soma:", n1 + n2);
console.log("Subtração:", n1 - n2);
console.log("Multiplicação:", n1 * n2);
console.log("Divisão:", n1 / n2);
console.log("Resto da divisão:", n1 % n2);

let alturaRetan = 6;
let baseRetan = 5;

console.log(
  "A area de um retângulo com",
  alturaRetan,
  "de altura e",
  baseRetan,
  "de base é:",
  alturaRetan * baseRetan,
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
  alturaParal * compParal * larguraParal,
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
  temperaturaCelsius * 1.8 + 32,
);

let altura = 1.7;
let massa = 70;

console.log("Seu IMC é de", massa/(altura*altura))