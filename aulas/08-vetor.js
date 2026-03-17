// criando variáveis do tipo array (vetor)

let dinos = ["Tiranossauro Rex", "Estegossauro", "Brontossauro", "Tricerátops"];
console.log(dinos);
// imprime dados em forma de tabela
console.table(dinos);

// lenght = tamanho do array (quantidade de elementos)
console.log("O vetor tem", dinos.length, "elementos.");

// imprimir elementos a partir do index
console.log(dinos[2]);

// push () - adicionar um novo elemento no final da final
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos.");

// unshift - adiciona um novo elemento no início da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos.");

// obter um elemento a partir do index

console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[3]);
console.log("20ª posição (não existe):", dinos[19]);

// pop - remove um elemento do final do vetor (último elemento)
dinos.pop();
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos.");

// shift - remove um elemento do início do vetor (primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos.");

// splice - remove um elemento a partir de um index, e também precisa ser informada a quantidade de registro a ser excluído a partir do index
dinos.splice(1, 1); // remove somente o segundo item da lista
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos.");

dinos.push("Pterodáctilo");
dinos.push("Estegossauro");
dinos.push("Argentinossauro");

// procurar um elemento a partir de um nome
// indexOf(procurado) - retorna o index do elemento no array ou -1 caso não encontre o dinossauro
let procurado = "Estegossauro";
let index = dinos.indexOf(procurado);
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos.");
console.log("O", procurado, "está no index", index);

procurado = "Cristianossauro";
index = dinos.indexOf(procurado);
console.log("O", procurado, "está no index", index, "(não encontrado)");

// excluir um elemento com base em seu nome

procurado = "Estegossauro";
index = dinos.indexOf(procurado);
console.log("O", procurado, "está no index", index, "pronto para exclusão.");
dinos.splice(index, 1);

// alterar o valor de um elemento a partir do index
dinos[1] = "Carnotauro";
console.table(dinos);

