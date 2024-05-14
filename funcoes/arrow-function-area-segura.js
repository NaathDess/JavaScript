const estaNaAreaSegura = (posX, posY, areaSegura) => {
    return posX >= areaSegura.XMin &&
           posX <= areaSegura.XMax &&
           posY >= areaSegura.YMin &&
           posY <= areaSegura.YMax ;
};

const areaSegura = {
        XMin:10,
        XMax:50,
        YMin:20,
        YMax:60
};

const posicaoJogador = { x: 30 , y: 40};

const resultado = estaNaAreaSegura(posicaoJOgador.x, posicaoJogador.y, areaSegura);
console.log("O jogador está na área segura:", resultado ? "Sim" : "Não");