
const lista_alunos = ['Joao', 'Maria', 'Luis', 'Ana']; // Utiliza-se [] para criar um array;
console.log(typeof lista_alunos);
console.log(lista_alunos[2]);
console.log(lista_alunos[0]);

lista_alunos[0] = 'Eduardo'; // E possivel editar um indice existente;
lista_alunos[4] = 'Luiza'; // E possivel tambem adicionar um indice apos o ultimo indice.

console.log(lista_alunos.length);
lista_alunos[lista_alunos.length] = 'Ana Claudia'; // E uma forma de adicionar um elemento ao final de um array grande;
lista_alunos.push('Roberto'); // Adiciona um elemento no ultimo indice;
lista_alunos.unshift('Adalberto'); // Adiciona um elemento no primeiro indice;

let aluno_removido = lista_alunos.pop(); // Remove um elemento do final do array;
console.log(aluno_removido);

lista_alunos.shift(); // Remove um elemento de um indice especifico do array;
delete lista_alunos [1]; // DELETA um elemento de um array, sem alterar os demais indices;
console.log(lista_alunos.slice(3,4)); // Fatia o array;

delete lista_alunos[0];
console.log(lista_alunos);

