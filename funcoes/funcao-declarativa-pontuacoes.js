function calcularPontuacaoTotal(pontuacoes) {
    let pontuacaoTotal = 0;
    for ( let i = 0; i < pontuacoes.leght; i++) {
        pontuacaoTotal += pontuacoes[i];
    }
    console.log("Pontuação total do jogador:", pontuacaoTotal);
}

const pontuacoesDoJogador = [10, 15, 20, 5, 8];
calcularPontuacaoTotal(pontuacoesDoJogador);