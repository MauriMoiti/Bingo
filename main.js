// Math.floor(Math.random() * 100))  
let arrPlayer = [];
let arrCPU = [];
let arrResult = [];

// select row-list player
let playerRow1 = document.querySelector(".player-row-1");
let playerRow2 = document.querySelector(".player-row-2");
let playerRow3 = document.querySelector(".player-row-3");
// select row-list CPU
let cpuRow1 = document.querySelector(".cpu-row-1");
let cpuRow2 = document.querySelector(".cpu-row-2");
let cpuRow3 = document.querySelector(".cpu-row-3");

function bingo() {
let iPlayer = 0;
let iCPU = 0;
    while(arrPlayer.length < 15) {
        // Generating number for player
        let numPlayer = Math.floor(Math.random() * 91) + 1;
        // Verifiying that the number is not repeated
        if(!arrPlayer.find((element) => element === numPlayer) && arrPlayer.length < 15) {
            arrPlayer.push(numPlayer);
            // Generating a span element for every aleatory number
            if(playerRow1.children.length < 5) {
                let span = document.createElement("span");
                span.classList.add('number-row-1', 'number-player');
                playerRow1.appendChild(span);
                playerRow1.children[iPlayer].textContent = numPlayer;
                iPlayer++
            } else if(playerRow2.children.length < 5) {
                if(iPlayer === 5) {
                    iPlayer = 0
                }
                let span = document.createElement("span");
                span.classList.add('number-row-2', 'number-player');
                playerRow2.appendChild(span);
                playerRow2.children[iPlayer].textContent = numPlayer;
                iPlayer++
            } else if(playerRow3.children.length < 5) {
                if(iPlayer === 5) {
                    iPlayer = 0
                }
                let span = document.createElement("span");
                span.classList.add('number-row-3', 'number-player');
                playerRow3.appendChild(span);
                playerRow3.children[iPlayer].textContent = numPlayer;
                iPlayer++
            }
        }
    }
    while(arrCPU.length < 15) { 
        // generating number for CPU
        let numCPU = Math.floor(Math.random() * 91) + 1;
        // verifiying that the number is not repeated
        if(!arrCPU.find((element) => element === numCPU) && arrCPU.length < 15) {
            arrCPU.push(numCPU);
            // Generating a span element for every aleatory number
            if(cpuRow1.children.length < 5) {
                let span = document.createElement("span");
                span.classList.add('number-row-1');
                cpuRow1.appendChild(span);
                cpuRow1.children[iCPU].textContent = numCPU;
                iCPU++
            } else if(cpuRow2.children.length < 5) {
                if(iCPU === 5) {
                    iCPU = 0
                }
                let span = document.createElement("span");
                span.classList.add('number-row-2');
                cpuRow2.appendChild(span);
                cpuRow2.children[iCPU].textContent = numCPU;
                iCPU++
            } else if(cpuRow3.children.length < 5) {
                if(iCPU === 5) {
                    iCPU = 0
                }
                let span = document.createElement("span");
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
let containerRow30 = document.querySelector(".container-result-30");
let containerRow60 = document.querySelector(".container-result-60");
let containerRow90 = document.querySelector(".container-result-90");

// generates the numbers and adds them to the history 
function changeContent() {
        let i = 0;
        function loop() {
            if (arrResult.length < 90) {
                let numberResult = Math.floor(Math.random() * 91) + 1;
                if (!arrResult.find((element) => element === numberResult) && containerRow30.children.length < 30) {
                    arrResult.push(numberResult);
                    let span = document.createElement("span");
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
                    let span = document.createElement("span");
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
                    let span = document.createElement("span");
                    span.classList.add('number-result');
                    containerRow90.appendChild(span);
                    containerRow90.children[i].textContent = numberResult;
                    i++;
                    buttonStart.textContent = numberResult;
                }
                // recursion time handler according to the intensity of finding a new non-repeated number
                (containerRow30.children.length < 30)
                ? setTimeout(loop, 400)
                : (containerRow60.children.length >= 15 && containerRow30.children.length < 30)
                ? setTimeout(loop, 250)
                : (containerRow60.children.length < 15) ? setTimeout(loop, 200) : setTimeout(loop, 50); 
            }
        }
        loop();  
}

buttonStart.addEventListener('click', bingo);
buttonStart.addEventListener('click', changeContent);

// initialize function of the statement of winner
