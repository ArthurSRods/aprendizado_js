// FUNCTION
let nome = ['Arthur','Ana', 'Beatriz', 'Roberta']
function saudacao(nome) {
    console.log(`ola ${nome}!`)};
// 'function' cria uma funcao que podera ser reutilizada;
saudacao(nome[1]);
function saudacao_2(nome) {
    return(`Boa tarde ${nome}!`)
};
saudacao_2(nome[2]);

function soma(x,y) {
    const resultado = x+y;
    return resultado;
};
console.log(soma(1,9));
console.log(soma(2,2));
console.log(soma(189,12));

function modulo_subtrai(x = 1,y = 1) {
    let resultado_sub = Math.abs(x-y);
    return resultado_sub;
};

console.log(modulo_subtrai(9,10));
console.log(modulo_subtrai(3,1));
console.log(modulo_subtrai(3,189));

const raiz = function(n) {
    return n**0.5;
};
console.log(raiz(4));
console.log(raiz(9));

// Tambem e possivel criar funcoes arrow function:
const quadrado = (n) => {
    return n**2;
};
console.log(quadrado(2));
console.log(quadrado(3));
console.log(quadrado(4));

