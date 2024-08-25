const nome = prompt('Digite seu nome: ');

function numeroDeLetras(){
    document.body.innerHTML += `Seu nome tem ${nome.length} letras. <br />`
};

function segundaLetra(){
    document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]} <br/>`
};

function ondeEstaLetraA (){
    document.body.innerHTML += `Qual o primeiro indice da letra A do seu nome? ${nome.toLowerCase().indexOf('a')}<br/>`
};

function ondeEstaUltimaLetraA (){
    document.body.innerHTML += `Qual o ultimo indice da letra A do seu nome? ${nome.toLowerCase().lastIndexOf('a')}<br/>`
};

function ultimasTres(){
    document.body.innerHTML += `As três ultimas letras do seu nome são ${nome.slice(-3)} <br/>`
};

function toUpperLower(){
    document.body.innerHTML += `Seu nome com letras maiusculas é ${nome.toUpperCase()} <br/>`;
    document.body.innerHTML += `Seu nome com letras minusulas é ${nome.toLowerCase()} <br/>`;
};

function asPalavras(){
    document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')} <br/>`
};