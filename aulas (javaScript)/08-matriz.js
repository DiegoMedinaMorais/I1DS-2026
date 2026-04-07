// criando matriz

let matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];

console.table(matriz);

// obtendo elementos com base no index

console.log(matriz[0][1]);
console.log(matriz[2][0]);

console.log("----------");

/*
atividade:

1 - cria matriz 3x3
2 - imprimir diagonal principal (X)
3 -  alterar o valor do item matriz[1][2] para 20 e matriz[2][0] para 30
*/

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(mat);
console.log(
  "valores da diagonal principal:",
  mat[0][0],
  mat[1][1],
  mat[2][2],
  mat[0][2],
  mat[1][1],
  mat[2][0],
);

mat[1][2] = 20;
mat[2][0] = 30;

console.table(mat);
