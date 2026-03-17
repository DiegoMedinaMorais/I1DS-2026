/*****************************************************
Lista de Exercícios
*****************************************************/
/*
1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.


2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o
 veículo faz uma média de 12 Km/L.
*/

// 1. função que retorna idade
function calculaIdade(anoAtual, anoNascimento) {
  let idade = anoAtual - anoNascimento;
  return idade;
}

let ano = 2026;
let nascimento = 2010;
let idadeAtual = calculaIdade(ano, nascimento);
console.log("Você tem", idadeAtual, "anos!");

// 2. função que retorna quantos km pode viajar com tal quantia de combustível
function calculaKm(combustivelCarro, mediaCarro) {
  let km = combustivelCarro / mediaCarro;
  return km;
}

let combustivel = 60;
let media = 12;
quantiaKm = calculaKm(combustivel, media);
console.log("Você pode andar", quantiaKm, "km!");
