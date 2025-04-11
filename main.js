
const GameBoard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""];
 
    const getBoard = () => board;
 
    return {getBoard};
})();
 
 
function Player (name, symbol) {
    return {name, symbol}
}
 
const GameController = (function () {
    let board = GameBoard.getBoard();

    let player1 = Player('P1', 'X');
    let player2 = Player('P2', 'O');

    let activePlayer = player1;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player1 ? player2 : player1;
    }

    const playRound = () => {
        let promptResult = prompt(`${activePlayer.name} enter the cell: `);
        promptResult = Number(promptResult)

        if (promptResult === 1) {
            board[0] = (activePlayer.symbol);
            switchPlayerTurn();
            console.log('done')
            console.log(board);
        } 
    }
    
    playRound();
    playRound();

    return {
        consolelogBoard: () => {
            console.log(board);
        },    
    }   
}())

// Now everything is good! (check out in console);
// Now we need to add a "avaialableCells" function that will verify which cells are empty
// and are okay to put a symbol in.



function displayGameController () {
    GameController.consolelogBoard();
}

