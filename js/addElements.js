import {generateRandomNumber, isTheNumberRepeated, addNumberToRow, arrPlayer, arrCPU, cpuRow1, cpuRow2, cpuRow3, playerRow1, playerRow2, playerRow3 } from "./createTable.js";
import {gameOver, buttonStart, isWinner} from "../main.js"
import{findMatch} from "./findMatch.js"
const containerRow30 = document.querySelector(".container-result-30");
const containerRow60 = document.querySelector(".container-result-60");
const containerRow90 = document.querySelector(".container-result-90");
const arrResult = [];
function addElements() {

    // Recursive loop function that generates and adds numbers to the history.
    function loop() {
        if(gameOver) {
            buttonStart.textContent = "Restart";
            buttonStart.classList.add("bombo-button-Restart");
            return
        }
        // Generates numbers and adds them to the history.
        // Ensures the number is not repeated and adds it to the appropriate row.
        // Also updates the button's content with the generated number.   
        if (arrResult.length < 90) {
            const numberResult = generateRandomNumber();
            // The following conditions check which row the number should be added to.
            if (!isTheNumberRepeated(numberResult, arrResult) && containerRow30.children.length < 30) {
                arrResult.push(numberResult)
                addNumberToRow(containerRow30, ["number-result"], numberResult)
                buttonStart.textContent = numberResult;
            } else if(!isTheNumberRepeated(numberResult, arrResult) && containerRow60.children.length < 30) {
                arrResult.push(numberResult)
                addNumberToRow(containerRow60, ["number-result"], numberResult)
                buttonStart.textContent = numberResult;
            } else if(!isTheNumberRepeated(numberResult, arrResult) && containerRow90.children.length < 30) {
                arrResult.push(numberResult);
                addNumberToRow(containerRow90, ["number-result"], numberResult)
                buttonStart.textContent = numberResult;
            }
            // recursion time handler according to the intensity of finding a new non-repeated number
            (containerRow30.children.length < 30)
            ? setTimeout(loop, 400)
            : (containerRow60.children.length >= 0 && containerRow60.children.length < 10)
            ? setTimeout(loop, 400)
            : (containerRow60.children.length > 10 && containerRow60.children.length < 20) 
            ? setTimeout(loop, 350)
            : (containerRow60.children.length > 20 && containerRow60.children.length < 30) 
            ? setTimeout(loop, 300)
            : (containerRow90.children.length >= 0 && containerRow90.children.length < 10) 
            ? setTimeout(loop, 200) 
            : (containerRow90.children.length > 10 && containerRow90.children.length < 20) 
            ? setTimeout(loop, 150)
            : setTimeout(loop, 50); 
            findMatch(arrPlayer, playerRow1, playerRow2, playerRow3, numberResult, "player")
            findMatch(arrCPU, cpuRow1, cpuRow2, cpuRow3, numberResult, "CPU")
            isWinner();
        }
    }
    loop();  
}

export {addElements, containerRow30, containerRow60, containerRow90, arrResult}