


const PlayingTable = {
    gameboard: ["", "", "", "", "", "", "", "", ""]
}


function Player (player, symbol) {
    return {player, symbol}
}


const GameController = (function () {
       
    const board = PlayingTable.gameboard;
        
        const getBoard = () => board;
    
        return {
            consolelogBoard: () => {
                console.log(getBoard());
            }
        }
})

GameController();

(function DisplayBoard() {
    GameController.consolelogBoard();
}())


 