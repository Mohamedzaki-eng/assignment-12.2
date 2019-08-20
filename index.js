var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var para = document.querySelector("#para");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
    }
    if (p1Score === winningScore) {
        para.textContent = "Player 1 Wins!";
        gameOver = true;
    }
    p1Display.textContent = p1Score;
});

p2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
    }
    if (p2Score === winningScore) {
        para.textContent = "Player 2 Wins!";
        gameOver = true;
    }
    p2Display.textContent = p2Score;
});

reset.addEventListener("click", function () {
    p1Display.textContent = "0";
    p2Display.textContent = "0";
    para.textContent = "First Player to 5 Wins!";
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
});