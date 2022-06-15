import doGameProcess from "./utils/game.js";
import startGame from "./utils/startGame.js";

const startGameButton = document.getElementById( 'start-game-btn' );
const difficultySelect = document.getElementById( 'difficulty-select' );
const boardDiv = document.getElementById( 'board' );
let boardMatrix = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
];

startGameButton.addEventListener( 'click', startGame( boardDiv, boardMatrix, difficultySelect.value ) );