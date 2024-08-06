//OBJETOS

const pessoa1 = {
    nome: 'Arthur',
    sobrenome: 'Rodrigues',
    idade: 29
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        fala() {
            console.log(`Meu nome e ${this.nome} ${this.sobrenome} e tenho ${this.idade}`)
        },
        incrementaIdade() {
            this.idade++;
        }
        }
    };
;
const pessoa2 = criaPessoa('Carlos', 'Andre', 30);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
const pessoa3 = criaPessoa('Lucas', 'Gomes', 26);
const pessoa4 = criaPessoa('Lucas', 'Goes', 29);
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.incrementaIdade();
pessoa3.fala();

pessoa4.fala();