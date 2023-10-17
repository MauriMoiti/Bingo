import {isTheNumberRepeated} from "./createTable.js";
import {playersCounts} from "../main.js"


function findMatch(arr, row1, row2,row3, number, playerType) {
    
    if(isTheNumberRepeated(number, arr)) {
        let indexMatch = arr.indexOf(isTheNumberRepeated(number, arr))
        if(indexMatch < 5) {
            row1.children[indexMatch].classList.add('number-match');
        } else if(indexMatch >= 5 && indexMatch < 10) {
            row2.children[Math.abs(indexMatch - 5)].classList.add('number-match');
        } else if(indexMatch >= 10 && indexMatch < 15) {
            row3.children[Math.abs(indexMatch - 10)].classList.add('number-match');
        }

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