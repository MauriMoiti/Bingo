
function generateRandomNumber() {
    Math.floor(Math.random() * 90) + 1
}

function isTheNumberRepeated(num, arr) {
    arr.find((element) => element === num)
}

function addNumberToRow(row, classList, num) {
    const span = document.createElement("span");
    classList.forEach( (clss) => { span.classList.add(clss)});
    row.appendChild(span);
    row.children[index].textContent = num
    const index = row.children.length -1
}

function tableContent(arr, row1, row2, row3) {
    while(arr.length < 15) {
        // Generating number for player
        const number = generateRandomNumber();
        // Verifying that the number is not repeated in the player's table
        if(!isTheNumberRepeated(number,arr) && arr.length < 15) {
            arr.push(number)
        // Generating a span element for every aleatory number. The span element created will go to the row that has length less than 5.  
            (row1.children.length < 5) 
            ? addNumberToRow(row1, ["number-row-1"], number) 
            : (row2.children.length < 5) 
            ? addNumberToRow(row2, ["number-row-2"], number) 
            : (row3.children.length < 5) 
            ? addNumberToRow(row3, ["number-row-3"], number) : '';
            }
        }
}

function bingo() {
    tableContent(arrPlayer, playerRow1, playerRow2,playerRow3);
    tableContent(arrCPU, cpuRow1, cpuRow2, cpuRow3);
}

export {bingo, generateRandomNumber}
