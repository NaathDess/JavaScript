const calcularDano = (ataque, defesa) => {
    const dano = ataque * 0.8 - defesa * 0.2;
    return Math.max(0, dano);
};

const danoCausado = calcularDano(50, 20);
console.log("Dano causado pelo ataque:", danoCausado);