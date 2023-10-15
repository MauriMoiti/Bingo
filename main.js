// Math.floor(Math.random() * 100))  
const arrPlayer = [];
const arrCPU = [];
const arrResult = [];

// select row-list player
const playerRow1 = document.querySelector(".player-row-1");
const playerRow2 = document.querySelector(".player-row-2");
const playerRow3 = document.querySelector(".player-row-3");
// select row-list CPU
const cpuRow1 = document.querySelector(".cpu-row-1");
const cpuRow2 = document.querySelector(".cpu-row-2");
const cpuRow3 = document.querySelector(".cpu-row-3");

let iPlayer = 0;
let iCPU = 0;
function bingo() {
    while(arrPlayer.length < 15) {
        // Generating number for player
        const numPlayer = Math.floor(Math.random() * 90) + 1;
        // Verifiying that the number is not repeated
        if(!arrPlayer.find((element) => element === numPlayer) && arrPlayer.length < 15) {
            arrPlayer.push(numPlayer);
            // Generating a span element for every aleatory number
            if(playerRow1.children.length < 5) {
                const span = document.createElement("span");
                span.classList.add('number-row-1', 'number-player');
                playerRow1.appendChild(span);
                playerRow1.children[iPlayer].textContent = numPlayer;
                iPlayer++
            } else if(playerRow2.children.length < 5) {
                if(iPlayer === 5) {
                    iPlayer = 0
                }
                const span = document.createElement("span");
                span.classList.add('number-row-2', 'number-player');
                playerRow2.appendChild(span);
                playerRow2.children[iPlayer].textContent = numPlayer;
                iPlayer++
            } else if(playerRow3.children.length < 5) {
                if(iPlayer === 5) {
                    iPlayer = 0
                }
                const span = document.createElement("span");
                span.classList.add('number-row-3', 'number-player');
                playerRow3.appendChild(span);
                playerRow3.children[iPlayer].textContent = numPlayer;
                iPlayer++
            }
        }
    }
    while(arrCPU.length < 15) { 
        // generating number for CPU
        const numCPU = Math.floor(Math.random() * 90) + 1;
        // verifiying that the number is not repeated
        if(!arrCPU.find((element) => element === numCPU) && arrCPU.length < 15) {
            arrCPU.push(numCPU);
            // Generating a span element for every aleatory number
            if(cpuRow1.children.length < 5) {
                const span = document.createElement("span");
                span.classList.add('number-row-1');
                cpuRow1.appendChild(span);
                cpuRow1.children[iCPU].textContent = numCPU;
                iCPU++
            } else if(cpuRow2.children.length < 5) {
                if(iCPU === 5) {
                    iCPU = 0
                }
                const span = document.createElement("span");
                span.classList.add('number-row-2');
                cpuRow2.appendChild(span);
                cpuRow2.children[iCPU].textContent = numCPU;
                iCPU++
            } else if(cpuRow3.children.length < 5) {
                if(iCPU === 5) {
                    iCPU = 0
                }
                const span = document.createElement("span");
                span.classList.add('number-row-3');
                cpuRow3.appendChild(span);
                cpuRow3.children[iCPU].textContent = numCPU;
                iCPU++
            }
        }
    }
    return {arrPlayer, arrCPU}
}
const buttonStart = document.querySelector(".bombo-button");

// select container row results 
const containerRow30 = document.querySelector(".container-result-30");
const containerRow60 = document.querySelector(".container-result-60");
const containerRow90 = document.querySelector(".container-result-90");

// generates the numbers and adds them to the history 
let i = 0
function changeContent() {
        let i = 0;
        function loop() {
            if(gameOver) {
                buttonStart.textContent = "Restart";
                buttonStart.classList.add("bombo-button-Restart");
                return
            }
            if (arrResult.length < 90) {
                const numberResult = Math.floor(Math.random() * 90) + 1;
                if (!arrResult.find((element) => element === numberResult) && containerRow30.children.length < 30) {
                    arrResult.push(numberResult);
                    const span = document.createElement("span");
                    span.classList.add('number-result');
                    containerRow30.appendChild(span);
                    containerRow30.children[i].textContent = numberResult;
                    i++;
                    buttonStart.textContent = numberResult;
                } else if(!arrResult.find((element) => element === numberResult) && containerRow60.children.length < 30) {
                    arrResult.push(numberResult);
                    if(i === 30) {
                        i = 0
                    }
                    const span = document.createElement("span");
                    span.classList.add('number-result');
                    containerRow60.appendChild(span);
                    containerRow60.children[i].textContent = numberResult;
                    i++;
                    buttonStart.textContent = numberResult;
                } else if(!arrResult.find((element) => element === numberResult) && containerRow90.children.length < 30) {
                    arrResult.push(numberResult);
                    if(i === 30) {
                        i = 0
                    }
                    const span = document.createElement("span");
                    span.classList.add('number-result');
                    containerRow90.appendChild(span);
                    containerRow90.children[i].textContent = numberResult;
                    i++;
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
                findMatch(numberResult)
            }
        }
        loop();  
}

buttonStart.addEventListener('click', handleButtonClick);

function handleButtonClick() {
    if (buttonStart.textContent === 'START') {
        bingo();
        changeContent();
    } else if (buttonStart.textContent === 'Restart') {
        restartGame();
        buttonStart.addEventListener('click', handleButtonClick);
    }
}


let countPlayer = 0; 
let countCPU = 0;
const findMatch = (numberResult) => {
    isWinner()
    if(arrPlayer.find((element) => element === numberResult)) {
        let indexMatch = arrPlayer.indexOf(arrPlayer.find((element) => element === numberResult))
        if(indexMatch < 5) {
            playerRow1.children[indexMatch].classList.add('number-match');
        } else if(indexMatch >= 5 && indexMatch < 10) {
            playerRow2.children[Math.abs(indexMatch - 5)].classList.add('number-match');
        } else if(indexMatch >= 10 && indexMatch < 15) {
            playerRow3.children[Math.abs(indexMatch - 10)].classList.add('number-match');
        }

        const countMatch1 = Array.from(playerRow1.querySelectorAll(':scope > .number-match'));
        const countMatch2 = Array.from(playerRow2.querySelectorAll(':scope > .number-match'));
        const countMatch3 = Array.from(playerRow3.querySelectorAll(':scope > .number-match'));
        
        const combinedArray = [...countMatch1, ...countMatch2, ...countMatch3];
        countPlayer = combinedArray.length;
        
    } 
    console.log(countPlayer)
    if(arrCPU.find((element) => element === numberResult)) { 
        let indexMatch = arrCPU.indexOf(arrCPU.find((element) => element === numberResult))
        if(indexMatch < 5) {
            cpuRow1.children[indexMatch].classList.add('number-match');
        } else if(indexMatch >= 5 && indexMatch < 10) {
            cpuRow2.children[Math.abs(indexMatch - 5)].classList.add('number-match');
        } else if(indexMatch >= 10 && indexMatch < 15) {
            cpuRow3.children[Math.abs(indexMatch -10)].classList.add('number-match');
        }
        const countMatch1 = Array.from(cpuRow1.querySelectorAll(':scope > .number-match'));
        const countMatch2 = Array.from(cpuRow2.querySelectorAll(':scope > .number-match'));
        const countMatch3 = Array.from(cpuRow3.querySelectorAll(':scope > .number-match'));
        
        const combinedArray = [...countMatch1, ...countMatch2, ...countMatch3];
        countCPU = combinedArray.length;
    }
}

// function for statement of the winner 
let gameOver = false;
const headerTitle = document.querySelector('.header-title')
const isWinner = () => {

    if(countPlayer === 15 && countCPU === 15) {
        headerTitle.textContent = "empate";
        gameOver = true;
    } else if(countPlayer === 15) {
        headerTitle.textContent = "player win";
        gameOver = true;
    } else if(countCPU === 15) {
        headerTitle.textContent = "cpu win";
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
    countPlayer = 0;
    countCPU = 0;
    i = 0;
    iPlayer = 0;
    iCPU = 0;
    buttonStart.classList.remove("bombo-button-Restart");
    [playerRow1, playerRow2, playerRow3, cpuRow1, cpuRow2, cpuRow3, containerRow30, containerRow60, containerRow90].forEach(row => {
        while(row.firstChild) {
            row.removeChild(row.firstChild);
        }
    });
}