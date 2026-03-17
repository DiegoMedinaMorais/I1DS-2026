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

console.log("1ª posição:", dinos[0])
console.log("4ª posição:", dinos[3])
console.log("20ª posição (não existe):", dinos[19])