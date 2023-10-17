const arrPlayer = [];
const arrCPU = [];
// select row-list player
const playerRow1 = document.querySelector(".player-row-1");
const playerRow2 = document.querySelector(".player-row-2");
const playerRow3 = document.querySelector(".player-row-3");
// select row-list CPU
const cpuRow1 = document.querySelector(".cpu-row-1");
const cpuRow2 = document.querySelector(".cpu-row-2");
const cpuRow3 = document.querySelector(".cpu-row-3");

function generateRandomNumber() {
    return Math.floor(Math.random() * 90) + 1
}

function isTheNumberRepeated(num, arr) {
    return arr.find((element) => element === num)
}

function addNumberToRow(row, classList, num) {
    const span = document.createElement("span");
    classList.forEach( (clss) => { span.classList.add(clss)});
    row.appendChild(span);
    const index = row.children.length -1
    row.children[index].textContent = num
}

function tableContent(arr, row1, row2, row3) {
    while(arr.length < 15) {
        // Generating number for player
        const number = generateRandomNumber();
        // Verifying that the number is not repeated in the player's table
        if(!isTheNumberRepeated(number,arr) && arr.length < 15) {
            arr.push(number)
        // Generating a span element for every aleatory number. The span element created will go to the row that has length less than 5.  
            if (row1.children.length < 5) {
                addNumberToRow(row1, ["number-row-1"], number);
            } else if (row2.children.length < 5) {
                addNumberToRow(row2, ["number-row-2"], number);
            } else if (row3.children.length < 5) {
                addNumberToRow(row3, ["number-row-3"], number);
            }
        }
        }
}

function bingo() {
    tableContent(arrPlayer, playerRow1, playerRow2,playerRow3);
    tableContent(arrCPU, cpuRow1, cpuRow2, cpuRow3);
}

export {bingo, addNumberToRow, isTheNumberRepeated, generateRandomNumber, arrPlayer, arrCPU, cpuRow1, cpuRow2, cpuRow3, playerRow1, playerRow2, playerRow3 }