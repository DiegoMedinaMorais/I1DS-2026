// operadores de incremento e decremento

// incremento (++ = + 1)
let idade = 16;
console.log(idade);

idade = idade + 1;
idade++;

console.log(idade);

// decremento (-- = - 1)
idade = idade - 1;
idade--;

console.log(idade);

let novaIdade = idade++; // idade++ soma na mesma variável, usar +
console.log("Idade:", idade, "| Nova idade:", novaIdade);

novaIdade = ++idade;
console.log("Idade:", idade, "| Nova idade:", novaIdade);
