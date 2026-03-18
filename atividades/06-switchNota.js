/* 
🧠 Desafio de Programação – Sistema de Média Escolar Switch Case
🎯 Objetivo


Criar um programa em JavaScript com switch case que calcule a média final de um aluno e informe sua situação no final do ano.


📌 Regras do programa
1. O programa deve receber 4 notas (de 0 a 10).
2. Calcular a média das notas.
3. Informar a situação do aluno de acordo com a média:


Média                   Situação
menor que 5             Reprovado
entre 5 e 6.9           Recuperação
maior ou igual a 7      Aprovado
*/

// jeito 1, uso de função com switch somente para mostrar resultado

function daSituação(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  if (media < 5) {
    return "Reprovado";
  } else if (media <= 6.9) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

let media = daSituação(10, 8, 3, 6);

switch (media) {
  case "Reprovado":
    console.log("Situação do aluno: reprovado");
    break;
  case "Recuperação":
    console.log("Situação do aluno: necessita recuperação");
    break;
  case "Aprovado":
    console.log("Situação do aluno: aprovado");
    break;

  default:
    console.log("Situação do aluno: não avaliada");
    break;
}

// jeito 2, uso de switch pra ver a situação, apoia somente números inteiros

function calculaMedia(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4) / 4;
}

media = calculaMedia(10, 5, 3, 6);
switch (media) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Aluno reprovado");
    break;
  case 5:
  case 6:
    console.log("Aluno necessita recuperação");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("Aluno aprovado");
    break;

  default:
    console.log("Erro ao tentar achar situação do aluno");
    break;
}

// jeito 3, professor

let n1 = 10;
let n2 = 8;
let n3 = 3;
let n4 = 6;

let m = (n1 + n2 + n3 + n4) / 4;

// usando switch case com boolean (true)
switch (true) {
  case m < 5:
    console.log("Aluno reprovado");
    break;
  case m < 7:
    console.log("Aluno necessita recuperação");
    break;
  case m >= 7:
    console.log("Aluno aprovado");
    break;

  default:
    console.log("Erro ao tentar achar situação do aluno");
    break;
}
