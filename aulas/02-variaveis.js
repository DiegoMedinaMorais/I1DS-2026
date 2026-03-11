var nome = "Tibúrcio";
console.log(nome);

console.log("Meu nome é", nome);

var idade = 53;

// pular linha é \n
console.log("Meu nome é", nome, "e eu tenho", idade, "anos\n");

console.log("----------------------------------------------------------------------------------------------------------------------------");

// case sensitive
console.log("");
console.log("Criando uma variável teste e tentando acessar como TESTE");

let teste = "Variável teste";
// console.log(TESTE);

// regras para criar variáveis:

// podem iniciar com "A" - "Z", "a" - "z", "_" ou "$"
// não podem conter carácter latino (ç, ã, á, à)

let MinhaVariavel = 10;
let outraVariavel = 2.65;
const _minhaConstante =  "Uma constante qualquer";
var $minhaVariavel = -5;

// errado
// var @variavel = 4;

 // variáveis lógicas

var nome = "Gerosvaldo";
var rico = false;
var professor = true;

/*
if (professor == true) {
    professor = "Sim"
} else {
    professor = "Não"
}

if (rico == true) {
    rico = "Sim"
} else {
    rico = "Não"
}
*/

console.log("Nome:", nome, "| É professor?", professor, "| É rico?", rico)

