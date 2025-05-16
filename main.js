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

    let player1score = 0;
    let player2score = 0;

    let activePlayer = player1;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player1 ? player2 : player1;
    }

    let gameOver = false;

    const resetGame = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }        
        
        // activePlayer = player1;
        gameOver = false;
    }


    const playRound = (cellId) => {
        let promptResult = cellId;
        promptResult = Number(promptResult);
        
        if (promptResult >= 1 && promptResult <= 9 && board[promptResult - 1] === "") {
            board[promptResult - 1] = (activePlayer.symbol);
            switchPlayerTurn();
            console.log(board);
        } else {
            console.log('Invalid move! Pick a number 1-9 for an empty cell.');
        }

        if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
            console.log(`${player1.name} has won the game!`)
            gameOver = true;    
            player1score += 1;
            return gameOver;
        } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
            console.log(`${player1.name} has won the game!`)
            gameOver = true;
            player1score += 1;    
            return gameOver;
        } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
            console.log(`${player1.name} has won the game!`)
            gameOver = true;  
            player1score += 1;  
            return gameOver;
        // starting cols
        } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
            console.log(`${player1.name} has won the game!`)
            gameOver = true;  
            player1score += 1;  
            return gameOver;
        } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
            console.log(`${player1.name} has won the game!`)
            gameOver = true;    
            player1score += 1;
            return gameOver;
        } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
            console.log(`${player1.name} has won the game!`)
            gameOver = true;  
            player1score += 1;  
            return gameOver;
        // starting diagonals
        } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
            console.log(`${player1.name} has won the game!`)
            gameOver = true;  
            player1score += 1;  
            return gameOver;
        } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
            console.log(`${player1.name} has won the game!`)
            gameOver = true;  
            player1score += 1;  
            return gameOver;
        // STARTING SYMBOL "O"!
        } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
            console.log(`${player2.name} has won the game!`);
            gameOver = true;  
            player2score += 1;  
            return gameOver;
        } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
            console.log(`${player2.name} has won the game!`);
            gameOver = true;  
            player2score += 1;  
            return gameOver;
        } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
            console.log(`${player2.name} has won the game!`);
            gameOver = true;  
            player2score += 1;  
            return gameOver;
        } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
            console.log(`${player2.name} has won the game!`);
            gameOver = true;  
            player2score += 1;  
            return gameOver;
        } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
            console.log(`${player2.name} has won the game!`);
            gameOver = true;  
            player2score += 1;  
            return gameOver;
        } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
            console.log(`${player2.name} has won the game!`);
            gameOver = true;  
            player2score += 1;  
            return gameOver;
        } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
            console.log(`${player2.name} has won the game!`);
            gameOver = true;  
            player2score += 1;  
            return gameOver;
        } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
            console.log(`${player2.name} has won the game!`);
            gameOver = true;  
            player2score += 1;  
            return gameOver;
        } else if (!board.includes("") && gameOver === false) {
            console.log("It's a tie!");
            gameOver = true;  
            return gameOver;
        }   
    }

    return {
        consolelogBoard: () => {
            console.log(board);
        },    
        getBoardFromGameController: () => {
            return board;
        } ,
        playTheRound: playRound,
        getGameStatus: () => {
            return gameOver;
        },
        resetGame,
        getPlayer1score: () => {
            return player1score;
        },
        getPlayer2score: () => {
            return player2score;
        }
    }   
}())

function displayGameController() {
    GameController.consolelogBoard();
}

const ScreenController = (function() {
    const game = GameController.getBoardFromGameController();
    const gameState = GameController.getGameStatus();

    const cells = document.querySelectorAll('.cell');
    const turnDisplayer = document.querySelector('.turn');

    const p1scoreDisplayer = document.querySelector('#p1score');
    const p2scoreDisplayer = document.querySelector('#p2score');

    let player1 = Player('P1', 'X');
    let player2 = Player('P2', 'O');

    let activePlayer = player1;
    
    turnDisplayer.textContent = `${activePlayer.name} turn`;
    
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player1 ? player2 : player1;
    }

    const cleanTheBoard = () => {
        // turnDisplayer.textContent = 'Game Over!';

        Array.from(cells).forEach(function(cell) {
            cell.textContent = '';
        }); 
        
        switchPlayerTurn();
        GameController.resetGame();
        GameInitalize();
    }
    
    const restartButton = document.querySelector('#restartButton');
    restartButton.addEventListener('click', function( ) {
        cleanTheBoard(); 
        turnDisplayer.textContent = `Game restarted! ${activePlayer.name} make a move!`;
        p1scoreDisplayer.textContent = "P1 score is: 0";
        p2scoreDisplayer.textContent = "P2 score is: 0";
    });

    const GameInitalize = () => {
        console.log('Game initialised!');
        console.log(activePlayer.name);
        Array.from(cells).forEach(function(cell) {
            cell.addEventListener('click', handleCellClick);
        });
    };

    const handleCellClick = (e) => {
        const cell = e.target;
        const cellId = Number(cell.dataset.id);

        if (cell.textContent !== "" || GameController.getGameStatus()) return;

        const moveAccepted = GameController.playTheRound(cellId); 

        if (moveAccepted !== false) {
            cell.textContent = activePlayer.symbol; 
        }

        if (GameController.getGameStatus()) {
            setTimeout(() => {
                turnDisplayer.textContent = `Game Over! ${activePlayer.name} has won the game!`;
                cleanTheBoard();
                p1scoreDisplayer.textContent = `P1 score is: ${GameController.getPlayer1score()}`;
                p2scoreDisplayer.textContent = `P2 score is: ${GameController.getPlayer2score()}`;
            }, 500);
        } else {
            switchPlayerTurn();
            turnDisplayer.textContent = `${activePlayer.name} turn`;
        }
    };


   
    GameInitalize();    


   
    
    
    console.log(game)
}());




