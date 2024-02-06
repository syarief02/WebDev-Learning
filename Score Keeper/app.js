const p1 = {
    score: 0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

winningScoreSelect.addEventListener("change", function () {
    reset();
    winningScore = parseInt(winningScoreSelect.value);
})

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
})

p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
})

resetButton.addEventListener("click", reset);

function reset() {
    // Set the game over flag to false
    isGameOver = false;

    // Loop through the players
    for (let i = 0; i < 2; i++) {
        // Get the player object
        let p = [p1, p2];
        // for (let p of [p1, p2]) {

        // Reset the player's score
        p[i].score = 0;

        // Update the displayed score
        p[i].display.textContent = p[i].score;

        // Remove the success and danger classes from the display
        p[i].display.classList.remove("has-text-success", "has-text-danger");

        // Enable the player's button
        p[i].button.disabled = false;
    }
}