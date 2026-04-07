// laço de repetição - FOR (PARA)

/*
ex: professor coloca aluno de castigo e pediu a ele para escrever
mil vezes a frase "Eu vou prestar atenção às aulas e anotar tudo!"
*/

/*
let i = 0; - variável de controle
i < 1000; - condição de repetição
i++ - aumenta a variável de controle para não travar e somar
*/

for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas e anotar tudo!");
}

// escreva todos os números de 1 a 20

for (let i = 1; i <= 20; i++) {
  console.log("Número:", i);
}

// escreva todos os números pares entre 1 a 20

// jeito 1
for (let i = 0; i <= 20; i += 2) {
  console.log("Número:", i);
}

// jeito 2
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log("Número:", i);
}

// dado um array, calcule e exiba a somatória de seus elementos
let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(soma);
