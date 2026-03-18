/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

function podeVotar(idade) {
  let resultado;
  if (idade < 16) {
    resultado = "Não pode votar";
  } else if (idade < 18 || idade >= 70) {
    resultado = "Voto opcional";
  } else {
    resultado = "Voto obrigatório";
  }
  return resultado;
}

let idade = 87;
console.log("Idade:", idade, "-", podeVotar(idade));

/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

function analisaNota(nota) {
  if (nota < 5) {
    return "Reprovado";
  } else if (nota >= 5 && nota <= 6.9) {
    return "Necessita recuperação";
  } else {
    return "Aprovado";
  }
}

let nota = 6;
console.log("Olá aluno. Você tirou", nota + ", resultado:", analisaNota(nota));

// extra | receber 4 notas, calcular media e dar resultado final

function analisaNotaFinal(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  if (media < 5) {
    return "Reprovado";
  } else if (media >= 5 && media <= 6.9) {
    return "Necessita recuperação";
  } else {
    return "Aprovado";
  }
}

let nota1 = 6;
let nota2 = 8;
let nota3 = 10;
let nota4 = 3;

console.log(
  "Olá aluno. Nesse ano você tirou",
  nota1 + ", " + nota2 + ", " + nota3 + ", e " + nota4 + ", com média de",
  (nota1 + nota2 + nota3 + nota4) / 4 + ".",
  "Resultado final:",
  analisaNotaFinal(nota1, nota2, nota3, nota4),
);
