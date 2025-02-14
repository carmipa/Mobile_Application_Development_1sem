// 1 - função Concat

// const alunos = ["Felipe", "Pedro"];
// const alunas = ["Rebeca", "Ana"];
// const todos = alunos.concat(alunas);
// console.log(todos); 

// 2 - função Concat com string

// const alunos1 = "Felipe";
// const alunas2 = "Rebeca";
// const alunas3 = "Rebeca";
// const todos2 = alunos1.concat(alunas2).concat(alunas3);
// console.log(todos2); 

// 3 - função Concat 3 arrys

// const alunos = ["Felipe", "Pedro"];
// const alunas = ["Rebeca", "Ana"];
// const professores = ["João", "Maria"];
// const todos = alunos.concat(alunas).concat(professores);
// console.log(todos); 

// 4 - adicionar item no array

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira"];
// // adicionar
// alunos.push("Rebeca");
// console.log(alunos);

// 5 - adicionar item no array - diretamente sem o metodo push

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira"];
// alunos[20] = "Julia";
// alunos[7] = "Rebeca";
// console.log(alunos);

// 6 - ordenação de vetores

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira", "Maria", "Rebeca"];
// alunos.sort(); // ordena de forma alfabética
// console.log(alunos);

// 7 - deletar um item do vetor

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira", "Maria", "Rebeca"];
// delete alunos[1];
// console.log(alunos);    

// 8 - deletar o último item do vetor

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira", "Maria", "Rebeca"];
// alunos.pop();
// console.log(alunos);

// 9 - deletar o primeiro item do vetor

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira", "Maria", "Rebeca"];
// alunos.shift();
// console.log(alunos);

// 10 - deletar um item do vetor com splice

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira"];
// // alunos.splice(1); // splice tem a função de remover todo os itens a direita do indice passado
// // alunos.splice(0, 1, "Rebeca"); // splice tem a função de remover todo os itens a direita do indice passado e adicionar rebeca
// alunos.splice(0, 1); // remove o felipe e imenda com pedro
// console.log(alunos);

// 11 Sim, você pode usar o método splice para remover o primeiro e o último item do array. Aqui está como você pode fazer isso:

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira", "Maria", "Rebeca"];
// alunos.splice(0, 1); // Remove o primeiro item
// alunos.splice(alunos.length - 1, 1); // Remove o último item
// console.log(alunos);

// 12 - exibir o nome e o indice do array

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira"];
// alunos.forEach(function(nome, indice){ //exibe o nome e o indice do array
//     console.log(nome, indice);
// })

// 13 - exibir os nomes  do array

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira"];
// alunos.forEach(function(nome){ //exibe o nome e o indice do array
//     console.log(nome);
// })

// 14 - exibe o nome o indice e o conteudo do array

// const alunos = ["Felipe", "Pedro", "Ana", "Jessica", "Oliveira"];
// alunos.forEach(function(nome, indice, alunos){ //exibe o nome e o indice do array
//     console.log(nome, indice, alunos);
// })


// -------------------------------------

// Filter

const carros = [ // array de objetos
    {modelo : "Golf", preco : 90000, ano : 2023, flex : false},
    {modelo : "A3", preco : 120000, ano : 2024, flex : true},
    {modelo : "Creta", preco : 130000, ano : 2024, flex : true},
    {modelo : "Fusca", preco : 70000, ano : 1990, flex : false}
]

// console.log(carros.filter(function(elemento){ // o elemento é como se fosse o i do indice do for
//     return elemento.preco > 2020 &&  elemento.flex == false;
// }))

// outra forma de fazer com arrow function

const ano = carro => carro.ano > 2020;
const flex = carro => carro.flex == false;

console.log(carros.filter(ano).filter(flex)); // exibe os carros que são de 2020 e não são flex


