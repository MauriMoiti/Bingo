import { bingo, arrPlayer, arrCPU, cpuRow1, cpuRow2, cpuRow3, playerRow1, playerRow2, playerRow3  } from "./js/createTable.js";
import {addElements, containerRow30, containerRow60, containerRow90, arrResult} from "./js/addElements.js"

const playersCounts = {
    CPU: 0,
    player: 0,
}

const buttonStart = document.querySelector(".bombo-button");
buttonStart.addEventListener('click', handleButtonClick);

//  * Handles the click event of the start button, either initializing the game or restarting it.
function handleButtonClick() {
    if (buttonStart.textContent === 'START') {
        bingo();
        addElements();
    } else if (buttonStart.textContent === 'Restart') {
        restartGame();
        buttonStart.addEventListener('click', handleButtonClick);
    }
}

// function for statement of the winner 
let gameOver = false;
const headerTitle = document.querySelector('.header-title')
const isWinner = () => {
    if(playersCounts["player"] === 15 && playersCounts["CPU"] === 15) {
        headerTitle.textContent = "Draw";
        gameOver = true;
    } else if(playersCounts["player"] === 15) {
        headerTitle.textContent = "Player win";
        gameOver = true;
    } else if(playersCounts["CPU"] === 15) {
        headerTitle.textContent = "CPU win";
        gameOver = true;
    }
}
function restartGame() {
    headerTitle.textContent = 'Welcome to Bingo';
    buttonStart.textContent = 'START';
    arrPlayer.length = 0;
    arrCPU.length = 0;
    arrResult.length = 0;
    gameOver = false;
    playersCounts["CPU"] = 0;
    playersCounts["player"] = 0;
    buttonStart.classList.remove("bombo-button-Restart");
    [playerRow1, playerRow2, playerRow3, cpuRow1, cpuRow2, cpuRow3, containerRow30, containerRow60, containerRow90].forEach(row => {
        while(row.firstChild) {
            row.removeChild(row.firstChild);
        }
    });
}
export {playersCounts, isWinner, gameOver, buttonStart}