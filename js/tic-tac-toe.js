const VAZIO = {
    simbolo: '_',
    valor: 0
};

const jogadorX = {
    simbolo: 'X',
    valor: 1
}

const jogadorO = {
    simbolo: 'O',
    valor: -1
}

var jogadorAtual = jogadorX;

var tabuleiro = [
    [VAZIO, VAZIO, VAZIO],
    [VAZIO, VAZIO, VAZIO],
    [VAZIO, VAZIO, VAZIO]
];

var numeroDeJogadas = 0;

const criarBotaoTabuleiro = (linha, coluna) => {
    let button = document.createElement('button');
    button.textContent = tabuleiro[linha][coluna].simbolo;

    button.className = 'botaoDeJogada';

    button.onclick = () => {
        fazerJogada(linha, coluna);
    }
    document.querySelector('#tabuleiro').appendChild(button);
}

const limparTabuleiro = () => {
    document.querySelector('#tabuleiro').innerHTML = '';
    document.querySelector('#status').innerHTML = '';
}

const desenharTabuleiro = () => {
    limparTabuleiro();
    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            criarBotaoTabuleiro(linha, coluna);
        }
    }
};

const trocarJogador = () => {
    if (jogadorAtual === jogadorX) {
        jogadorAtual = jogadorO;
    } else {
        jogadorAtual = jogadorX;
    }
}

const mudarStatus = (msg) => document.querySelector('#status').innerHTML = msg;

const fazerJogada = (linha, coluna) => {
    if (tabuleiro[linha][coluna] === VAZIO) {
        tabuleiro[linha][coluna] = jogadorAtual;
        desenharTabuleiro();
        numeroDeJogadas++;
        validarCampeao();
        trocarJogador();
    } else {
        mudarStatus("Já Marcado! Jogue novamente");
    }
}

const checarTrilha = (trilha) => {
    if (trilha[0].valor + trilha[1].valor + trilha[2].valor == jogadorAtual.valor * 3)
        return true;

    return false;
}

const verificarLinha = () => {
    if (checarTrilha(tabuleiro[0]) || checarTrilha(tabuleiro[1]) || checarTrilha(tabuleiro[2])) {
        return true;
    }
    return false;
}

const verificarColuna = () => {
    let column1 = [
        tabuleiro[0][0],
        tabuleiro[1][0],
        tabuleiro[2][0]
    ];
    let column2 = [
        tabuleiro[0][1],
        tabuleiro[1][1],
        tabuleiro[2][1]
    ];
    let column3 = [
        tabuleiro[0][2],
        tabuleiro[1][2],
        tabuleiro[2][2]
    ];

    if (checarTrilha(column1) || checarTrilha(column2) || checarTrilha(column3)) {
        return true;
    }
    return false;
}

const verificarDiagonal = () => {
    let diagonal_1 = [
        tabuleiro[0][0],
        tabuleiro[1][1],
        tabuleiro[2][2]
    ];

    let diagonal_2 = [
        tabuleiro[0][2],
        tabuleiro[1][1],
        tabuleiro[2][0]
    ];
    if (checarTrilha(diagonal_1) || checarTrilha(diagonal_2)) {
        return true;
    }
    return false;
}

const verificarEmpate = () => numeroDeJogadas === 9 ? true : false

const reiniciarJogo = () => document.location.reload(true);

const botaoReset = () => {
    const botaoRestart = document.createElement('button');
    botaoRestart.textContent = 'Reiniciar';
    botaoRestart.style.padding = '8px';

    botaoRestart.onclick = reiniciarJogo;


    document.querySelector('#status').appendChild(botaoRestart);
}

const validarCampeao = () => {
    if (verificarLinha() || verificarColuna() || verificarDiagonal()) {
        mudarStatus("Jogador " + jogadorAtual.simbolo + " venceu!  ");
        botaoReset();
    } else if (verificarEmpate()) {
        mudarStatus("Empate!!  ");
        botaoReset();
    }
};