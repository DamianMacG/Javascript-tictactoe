var paragraph = document.getElementById("paragraph");
var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
var currentPlayer = "X";
var gameOver = false;
var playerOneScore = 0;
var playerTwoScore = 0;
var x = document.getElementById("span1");
var y = document.getElementById("span2");
function checkGameOver() {
    for (var i = 0; i < 3; i++) {
        if (board[i][0] === "X" &&
            board[i][0] === board[i][1] &&
            board[i][0] === board[i][2]) {
            gameOver = true;
            paragraph.innerText = "GAME OVER!!!";
            x.innerText = playerOneScore += 1;
            return;
        }
    }
    for (var i = 0; i < 3; i++) {
        if (board[i][0] === "O" &&
            board[i][0] === board[i][1] &&
            board[i][0] === board[i][2]) {
            gameOver = true;
            paragraph.innerText = "GAME OVER!!!";
            y.innerText = playerTwoScore += 1;
            return;
        }
    }
    for (var i = 0; i < 3; i++) {
        if (board[0][i] === "X" &&
            board[0][i] === board[1][i] &&
            board[0][i] === board[2][i]) {
            gameOver = true;
            paragraph.innerText = "GAME OVER!!!";
            x.innerText = playerOneScore += 1;
            return;
        }
    }
    for (var i = 0; i < 3; i++) {
        if (board[0][i] === "O" &&
            board[0][i] === board[1][i] &&
            board[0][i] === board[2][i]) {
            gameOver = true;
            paragraph.innerText = "GAME OVER!!!";
            y.innerText = playerTwoScore += 1;
            return;
        }
    }
    if (board[0][0] === "X" &&
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]) {
        gameOver = true;
        paragraph.innerText = "GAME OVER!!!";
        x.innerText = playerOneScore += 1;
        return;
    }
    if (board[0][0] === "O" &&
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]) {
        gameOver = true;
        paragraph.innerText = "GAME OVER!!!";
        y.innerText = playerTwoScore += 1;
        return;
    }
    if (board[0][2] === "X" &&
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0]) {
        gameOver = true;
        paragraph.innerText = "GAME OVER!!!";
        x.innerText = playerOneScore += 1;
        return;
    }
    if (board[0][2] === "O" &&
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0]) {
        gameOver = true;
        paragraph.innerText = "GAME OVER!!!";
        y.innerText = playerTwoScore += 1;
        return;
    }
    var isTie = true;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] === "") {
                isTie = false;
                break;
            }
        }
    }
    if (isTie) {
        paragraph.innerText = "GAME OVER - IT'S A TIE!!!";
        gameOver = true;
    }
}
function makeMove(row, col) {
    if (!gameOver && board[row][col] === "") {
        board[row][col] = currentPlayer;
        // We need to have rows and cells before [col] and [rows] as we are accessing the whole table values id=board, cell is basically columns but is it table syntax
        var result = document.getElementById("board").rows[row].cells[col];
        result.innerText = currentPlayer;
        checkGameOver();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
function resetGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    currentPlayer = "X";
    gameOver = false;
    paragraph.innerText = "";
    var cells = document.querySelectorAll("#board td");
    cells.forEach(function (cell) {
        cell.textContent = "";
    });
}
