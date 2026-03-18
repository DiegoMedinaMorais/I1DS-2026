/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

function podeVotar(idade) {
  if (idade < 16) {
    return "Não pode votar";
  } else if (idade < 18 || idade >= 70) {
    return "Voto opcional";
  } else {
    return "Voto obrigatório";
  }
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
  } else if (nota <= 6.9) {
    return "Necessita recuperação";
  } else {
    return "Aprovado";
  }
}

let nota = 6;
console.log("Olá aluno. Você tirou", nota + ", resultado:", analisaNota(nota));

// EXTRA | receber 4 notas, calcular média e dar resultado final

function analisaNotaFinal(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  if (media < 5) {
    return "Reprovado";
  } else if (media <= 6.9) {
    return "Necessita recuperação";
  } else {
    return "Aprovado";
  }
}

console.log("Olá aluno. Nesse ano seu resultado final é de:", analisaNotaFinal(6, 8, 10, 3));

