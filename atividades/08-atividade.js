/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

// 1)
console.log("----------")

let matriz1 = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

console.log("Matriz:")
console.table(matriz1);

let numDiagonal = 0
for (let linha = 0; linha < matriz1.length; linha++) {
  for (let coluna = 0; coluna < matriz1[0].length; coluna++) {
    if (linha == coluna) console.log("Elemento da diagonal:", matriz1[linha][coluna])
  }
}

console.log("----------")

// 2)

let matriz2 = [
  [8, 1, 3],
  [2, 9, 1],
  [4, 6, 2],
];

console.log("Matriz inicial:");
console.table(matriz2);
console.log("----------")

for (let linha = 0; linha < matriz2.length; linha++) {
  for (let coluna = 0; coluna < matriz2[0].length; coluna++) {
    matriz2[linha][coluna] *= 3;
  }
}

console.log("Matriz nultiplicada:");
console.table(matriz2);
console.log("----------")
