// Seleciona o formulário
const form = document.querySelector('#formulario');

// Adiciona o evento de submissão ao formulário
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Seleciona os campos de entrada de peso e altura
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  // Converte os valores inseridos para números
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Verifica se os valores de peso e altura são válidos
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  // Calcula o IMC e o nível correspondente
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  // Mensagem de resultado
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  // Exibe o resultado
  setResultado(msg, true);
});

// Função para calcular o nível do IMC
function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  return nivel[0];
}

// Função para calcular o IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Função para criar um parágrafo
function criaP() {
  const p = document.createElement('p');
  return p;
}

// Função para exibir o resultado na tela
function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
