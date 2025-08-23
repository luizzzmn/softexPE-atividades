function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return `O número ${numero} é Par.`;
  } else {
    return `O número ${numero} é Ímpar.`;
  }
}

function calcularFatorial(numero) {
  if (numero < 0) {
    return "Erro: Fatorial não é definido para números negativos.";
  } else if (numero === 0) {
    return 1;
  } else {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
}


function encontrarMaiorNumero(arrayDeNumeros) {
  if (arrayDeNumeros.length === 0) {
    return "O array está vazio.";
  }

  let maiorNumero = arrayDeNumeros[0];

  for (let i = 1; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] > maiorNumero) {
      maiorNumero = arrayDeNumeros[i];
    }
  }

  return maiorNumero;
}