// atividade: dado um array, calcule e exiba a quantidade de pares e impares

let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("A quantidade de pares é:", pares);
console.log("A quantidade de impares é:", impares);

console.log("----------");

// atividade: dado o vetor, multiplique todos os seus elementos por 3

console.log("Array inicial:");
console.table(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
  // numeros[i] = numeros[1] * 3 pode ser simplificado para numeros[1] *= 3
}

console.log("Array multiplicada:");
console.table(numeros);

console.log("----------");

// atividade: dado uma matriz 2x3, imprima todos os seus elementos com as respectivas posições

let matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

/*
neste exemplo a posição do item 1,2 é 8 (primeiro número
é a linha, eixo X, segundo número é a coluna, eixo Y)
*/

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log("Matriz["+linha+",", coluna+"] =", matriz[linha][coluna])
   }
}