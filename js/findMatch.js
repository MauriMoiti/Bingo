import {isTheNumberRepeated} from "./createTable.js";
import {playersCounts} from "../main.js"


/**
 * Identifies matches in the player or CPU's table and updates the class to indicate a match.
 * It also updates the count of matches for the specific player.
 * 
 * @param {Array} arr - The array containing the numbers for the player or CPU.
 * @param {HTMLElement} row1 - The first row element.
 * @param {HTMLElement} row2 - The second row element.
 * @param {HTMLElement} row3 - The third row element.
 * @param {number} number - The number to search for a match.
 * @param {string} playerType - The type of player ("player" or "CPU").
 */
function findMatch(arr, row1, row2,row3, number, playerType) {
    
    if(isTheNumberRepeated(number, arr)) {
        // Identify which row the match is in and update the class of the element to indicate the match.
        let indexMatch = arr.indexOf(isTheNumberRepeated(number, arr))
        if(indexMatch < 5) {
            row1.children[indexMatch].classList.add('number-match');
        } else if(indexMatch >= 5 && indexMatch < 10) {
            row2.children[Math.abs(indexMatch - 5)].classList.add('number-match');
        } else if(indexMatch >= 10 && indexMatch < 15) {
            row3.children[Math.abs(indexMatch - 10)].classList.add('number-match');
        }
        // Count the number of matched numbers in each row.
        const countMatch1 = Array.from(row1.querySelectorAll(':scope > .number-match'));
        const countMatch2 = Array.from(row2.querySelectorAll(':scope > .number-match'));
        const countMatch3 = Array.from(row3.querySelectorAll(':scope > .number-match'));
        
        const combinedArray = [...countMatch1, ...countMatch2, ...countMatch3];
        let count = combinedArray.length;

        if(playerType in playersCounts) {
            playersCounts[playerType] = count;
        } else {
            console.log(`Unknown player type: ${playerType}`);
        }
    } 
}

export {findMatch}