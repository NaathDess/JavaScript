const soma = (numero1, numero2) => numero1 + numero2;

const subtracao = (numero1, numero2) => numero1 - numero2;

const multiplicacao = (numero1, numero2) => numero1 * numero2;

const divisao = (numero1, numero2) => numero1 / numero2;

const executarOperacao = (numero1, numero2, callback) => callback(numero1, numero2);

const resultadoSoma = executarOperacao(5, 3, soma);
console.log("Resultado da soma:", resultadoSoma);

const resultadoSubtracao = executarOperacao(10, 4, subtracao);
console.log("Resultado da subtração:", resultadoSubtracao);

const resultadoMultiplicacao = executarOperacao(12, 5, multiplicacao);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const resultadoDivisao = executarOperacao(150, 3, divisao);
console.log("Resultado da divisão:", resultadoDivisao);