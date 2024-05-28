document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    // Adiciona um evento para o botão limpar
    let limparButton = document.getElementById('limpar');
    limparButton.addEventListener('click', handleClearBoard);
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert('O jogo acabou, o Player ' + playerTime);
        }, 10);
    }

    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        square.innerHTML = symbol ? `<div class='${symbol}'></div>` : '';
    })
}

function handleClearBoard() {
    // Redefine o tabuleiro
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    // Atualiza a interface gráfica
    updateSquares();
}
