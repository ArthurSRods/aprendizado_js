//OBJETO DATE
const dataAtual = new Date();
console.log(dataAtual); // Como nenhum parâmetro foi passado para a função, o comando quando chamado gerará uma const com a data atual.
console.log(dataAtual.toString())

const data0 = new Date(0); // 01/01/1970 Timestamp unix ou época unix
console.log(data0);
console.log(data0.toString());

const novaData = new Date(2019, 3, 20, 15, 14, 27, 999); // Ano, Mês (-1 pois começa do 0), Dia, Hora, Minuto, Segundo, Milisegundo
console.log(novaData)
console.log(novaData.toString())

let data = new Date('2019-04-14 20:20:59')
console.log(data)

console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth() + 1); // +1 pois a contagem de mês começa do 0
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Minutos:', data.getMinutes());
console.log('Segundos:', data.getSeconds());
console.log('Milisegundos:', data.getMilliseconds());
console.log('Dia da semana:', data.getDay()); // Domingo sendo 0 e sabado sendo 6
console.log(data.toString());
