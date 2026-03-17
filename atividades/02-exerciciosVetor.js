/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

//cria o array
let frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.log("Array inicial:")
console.table(frutas)

// coloca elemento no fim do array
frutas.push("Tangerina");
console.log("Array com tangerina no final:")
console.table(frutas)

// coloca elemento no início do array
frutas.unshift("Goiaba");
console.log("Array com goiaba no início:")
console.table(frutas)

// acha conteúdo do index 5
let contInd5 = frutas[5];
console.log("O conteúdo do índice 5 é:", contInd5);

// acha index do elemento "Uva" e o deleta
let indUva = frutas.indexOf("Uva");
frutas.splice(indUva, 1);
console.log("Array com uva excluída:")
console.table(frutas)

// copia array frutas com apenas os elementos do index 2, 3, e 4
let copia = frutas.slice(2, 5);
console.log("Cópia do array frutas somente com os elementos do índice 2, 3, e 4:")
console.table(copia)
