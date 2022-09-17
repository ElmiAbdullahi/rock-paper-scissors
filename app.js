/* Imports */
import { getRandomItem } from '/utils.js';
/* State */
// let gameState = 'guess';

/* Actions */
function loadPage() {}

/* Components */

/* Component */
// get DOM
const guessRock = document.getElementById('guess-rock');
// guess rock img
const guessPaper = document.getElementById('guess-paper');
// guess paper img
const guessScissors = document.getElementById('guess-scissors');
// guess scissors img
// display
function displayGuess() {
    guessRock.classList.remove('rock', 'paper', 'scissors');
    guessPaper.classList.remove('rock', 'paper', 'scissors');
    guessScissors.classList.remove('rock', 'paper', 'scissors');
}
// event listeners
guessRock.addEventListener('click', () => {});
guessPaper.addEventListener('click', () => {});
guessScissors.addEventListener('click', () => {});

/* Run page load code */
loadPage();
