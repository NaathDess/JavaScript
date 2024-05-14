const gerarNumeroAleatorio = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numeroAleatorio = gerarNumeroAleatorio(1, 100);
console.log("Número aleatório:", numeroAleatorio);