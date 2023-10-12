// Math.floor(Math.random() * 100))  
function bingo() {
    let arrPlayer = [];
    let arrCPU = [];

    while(arrPlayer.length < 15 && arrCPU.length < 15) {

        // generating number for player and CPU
        let numPlayer = Math.floor(Math.random() * 90)
        let numCPU = Math.floor(Math.random() * 90)

        // verifiying that the number is not repeated
        if(!arrPlayer.find((element) => element === numPlayer) && arrPlayer.length < 15) {
            arrPlayer.push(numPlayer);
        }

        if(!arrCPU.find((element) => element === numCPU) && arrCPU.length < 15) {
            arrCPU.push(numCPU);
        }
    }
    return {arrPlayer, arrCPU}
}