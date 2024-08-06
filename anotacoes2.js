// FORMAS DE CONVERSAO DE STR EM NUMERO
const vai_virar_numero = '4';
console.log ('A constante ', (vai_virar_numero), 'e do tipo', (typeof vai_virar_numero),'. A ideia e transforma-la numa const do tipo "number".');
console.log(typeof vai_virar_numero);
console.log(typeof parseInt(vai_virar_numero));
// O primeiro jeito de transformar uma const do tipo str em numerica e usando as funções "parseInt" ou "parseFloat";
console.log(typeof Number(vai_virar_numero));
// O segundo jeito de transformar uma const do tipo str em uma const numerica e usando a funcao "Number()";

const nome_1 = 'Joao'
const profissao = 'medico'
let frase = (`Um ${profissao} chamado ${nome_1}`);
console.log(frase);
console.log(frase.replace(/d/g, 'f'));
console.log(frase.slice(2,-1));
console.log((134).toString(2)); // funcao .toString(2) converte um numero em binario.

let num_1 = 1;
let num_2 = 0.2;
num_1 += num_2;
num_1 += num_2;
num_1 += num_2;
console.log(num_1.toFixed(1));
console.log(num_1.toString(2));
console.log(Number.isNaN (num_1));
console.log(Math.log10(num_1));
console.log(Math.floor(num_1)); // Arredonda para baixo;
console.log(Math.ceil(num_1)); // Arredonda para cima;
console.log(Math.round(num_1)); // Arredonda;
console.log(Math.random()); // Aleatoriza;
