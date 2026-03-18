// desvio condicional - SWITCH CASE

/*
switch case - estrutura de decisão usada quando queremos comparar o valor de uma variável com vários possíveis resultados
regra do profCastello - se tiver mais de 3 comparadores, faça um switch case
*/

/*
exemplo 01 - menu
neste exemplo a variável menuSelecionado guardará o nome de uma opção de menu.
o switch verifica qual foi a opção escolhida e exibe uma mensagem correspondente
*/

let menuSelecionado = "Pague um café";
switch (menuSelecionado) {
  case "Home":
    console.log('Você clicou no link "Home"');
    break;
  case "Quem somos":
    console.log('Você clicou no link "Quem somos"');
    break;
  case "Contato":
    console.log('Você clicou no link "Contato"');
    break;
  case "Pague um café":
    console.log('Você clicou no link "Pague um café"');
    break;
  case "Redes sociais":
    console.log('Você clicou no link "Redes sociais"');
    break;

  default:
    console.log("Opção incorreta, selecione uma opção no menu!");
    break;
}

const pi = 3.1415683

console.log(pi)
console.log(pi.toFixed(2)) // coloca números com 2 casas decimais somente