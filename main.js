// Math.floor(Math.random() * 100))  
let arrPlayer = [];
let arrCPU = [];
let result = [];

function bingo() {

    while(arrPlayer.length < 15) {
        // generating number for playe
        let numPlayer = Math.floor(Math.random() * 91) 
        // verifiying that the number is not repeated
        if(!arrPlayer.find((element) => element === numPlayer) && arrPlayer.length < 15) {
            arrPlayer.push(numPlayer);
            console.log('Added to arrPlayer:', numPlayer);
        }
    }
    while(arrCPU.length < 15) { 
        // generating number for CPU
        let numCPU = Math.floor(Math.random() * 91) 
        // verifiying that the number is not repeated
        if(!arrCPU.find((element) => element === numCPU) && arrCPU.length < 15) {
            arrCPU.push(numCPU);
            console.log('Added to arrCPU:', numCPU);
        }
    }
    return {arrPlayer, arrCPU}
}

function changeContent () {
    if(buttonStart.textContent === 'START') {

    }
}
const buttonStart = document.querySelector(".bombo-button-start");
buttonStart.addEventListener('click', bingo)