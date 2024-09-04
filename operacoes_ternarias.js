// Operações ternarias
// ? :
const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP')
// }
// else{
//     console.log('Usuário normal')
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario,corPadrao)
