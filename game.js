// game.js

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let player1Score = 0;
let player2Score = 0;

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver) {
            updateScore();
        } else {
            playerTime = 1 - playerTime; // Alterna entre 0 e 1
        }
    }
    return gameOver;
}

function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }
    }
    return false;
}

function updateScore() {
    if (playerTime == 0) {
        player1Score++;
        document.getElementById('player1-score').textContent = player1Score;
    } else {
        player2Score++;
        document.getElementById('player2-score').textContent = player2Score;
    }
}

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', event => {
        let position = event.target.id;
        if (handleMove(position)) {
            // Atualizar a interface após a jogada, se necessário
        }
    });
});

document.getElementById('limpar').addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    document.querySelectorAll('.square').forEach(square => {
        square.innerHTML = '';
    });
});

document.getElementById('zerar').addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    document.getElementById('player1-score').textContent = player1Score;
    document.getElementById('player2-score').textContent = player2Score;
});

