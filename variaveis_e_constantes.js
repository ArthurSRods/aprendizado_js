/*VARIAVEIS*/
var nome_1 = 'Antonio'; // Cria variavel
let nome_2 = ('Joao'); // Cria variavel;
// Variaveis criadas com "let" nao podem ser redeclaradas com a funcao let.
// Variaveis criadas com, "let" so podem modificadas.
// Para atribuir novo valor a uma variavel criada com a funcao let, utiliza se apenas 'variavel = novo valor'
nome_2 = 'Eduardo';

console.log(nome_2 ,'nasceu em 2000');
console.log(nome_2,'quebrou a perna em 2007');
console.log(nome_2, 'comecou a namorar com Claudia em 2017');
console.log(nome_2, 'casou-se com Claudia em 2023');
console.log('Em 2024,', nome_2, 'e Claudia se divorciaram.');

let casa; // E possivel criar uma variavel com let, sem definir um valor a ela.
// A variavel e declarada, e sera reservada. Podera ser alterada posteriormente no codigo.
// Nao se pode criar variaveis com palavras reservadas.

casa = 'Barraco';
console.log(casa);// A variavel q nao for atribuido valor, sera lida como Undefined. 
// O nome de uma variavel nao pode ser iniciado com um numero.

/*CONSTANTE*/
const pi = 3.141519; // Funcao "const" cria uma constante;
// O valor de uma constante nao pode ser redefinido.
const numero8 = 8;
console.log((pi*numero8).toFixed(2));
console.log(typeof numero8); // Funcao "typeof": retorna o tipo de uma variavel (numerica, string, boolean, etc)
console.log(typeof pi);
console.log(typeof (pi*numero8));
console.log(typeof nome);
console.log(typeof true);
console.log(typeof null); // Contantes do tipo null e undefined sao coisas diferentes!!!
const conjunto_123 = [1,2,3]; // Para criar um conjunto, utiliza-se "[]"
conjunto_123.push(4); // Funcao ".push()" forca um valor dentro de uma variavel/ constante atribuida.
console.log(conjunto_123);
let conj_a = ['a','A','AaAaAa','aaaa'];
conj_a.push('aaaAaAaAaAa','AAAAAA');
console.log(conj_a);

