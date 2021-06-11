const HUMAN = "x",
  AI = "o";
let originalBoard;
const cells = document.querySelectorAll(".cell");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let difficultyChoice;

class UI {
  static resetConsole() {
    document.querySelector(".popUp").style.display = "flex";
    document.querySelector(".messageBox").style.display = "none";
  }

  static removePopUp() {
    document.querySelector(".popUp").style.display = "none";
  }

  static changeCell(cellID, player) {
    document.getElementById(cellID).innerText = player;
  }
  static highlightWinningCombo(index, gameWon) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == HUMAN ? "blue" : "red";
  }
  static declareWinner(who) {
    document.querySelector(".messageBox").style.display = "flex";
    document.querySelector(".winningMessage").innerText = who;
  }
}

class Game {
  constructor(circleTurn = false) {
    this.circleTurn = circleTurn;
  }

  static setEasyMode() {
    UI.removePopUp();
    difficultyChoice = "easy";
    Game.startGame();
  }

  static setHardMode() {
    UI.removePopUp();
    difficultyChoice = "hard";
    Game.startGame();
  }

  static restartGame() {
    UI.resetConsole();
    Game.startGame();
  }

  static startGame() {
    // UI.resetConsole();

    originalBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
      cells[i].style.removeProperty("background-color");
      cells[i].addEventListener("click", Game.proceedGame, false);
    }
  }
  static proceedGame(e) {
    if (typeof originalBoard[e.target.id] == "number") {
      Game.turn(e.target.id, HUMAN);
      if (!Game.checkWin(originalBoard, HUMAN) && !Game.checkTie()) {
        setTimeout(() => Game.turn(Game.bestSpot(difficultyChoice), AI), 300);
      }
    }
  }

  static turn(cellID, player) {
    originalBoard[cellID] = player;
    UI.changeCell(cellID, player);
    let gameWon = Game.checkWin(originalBoard, player);
    if (gameWon) {
      Game.gameOver(gameWon);
    }
  }

  static checkWin(board, player) {
    let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
    let gameWon = null;
    for (let [index, wincombo] of WINNING_COMBINATIONS.entries()) {
      if (wincombo.every((element) => plays.indexOf(element) > -1)) {
        gameWon = { index: index, player: player };
        break;
      }
    }
    return gameWon;
  }

  static gameOver(gameWon) {
    for (let index of WINNING_COMBINATIONS[gameWon.index]) {
      UI.highlightWinningCombo(index, gameWon);
    }
    for (let i = 0; i < cells.length; i++) {
      cells[i].removeEventListener("click", Game.proceedGame, false);
    }
    UI.declareWinner(gameWon.player == HUMAN ? "You win!" : "You lose.");
  }

  static emptySquares() {
    return originalBoard.filter((s) => typeof s == "number");
  }

  static bestSpot(choice) {
    if (choice == "easy") {
      return Game.emptySquares()[0];
    } else {
      return Game.minimax(originalBoard, AI).index;
    }
  }

  static checkTie() {
    if (Game.emptySquares().length == 0) {
      for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "green";
        cells[i].removeEventListener("click", Game.proceedGame, false);
      }
      UI.declareWinner("Tie Game!");
      return true;
    }
    return false;
  }

  static minimax(newBoard, player) {
    let availableSpots = Game.emptySquares();
    if (Game.checkWin(newBoard, HUMAN)) {
      return { score: -10 };
    } else if (Game.checkWin(newBoard, AI)) {
      return { score: 10 };
    } else if (availableSpots.length === 0) {
      return { score: 0 };
    }

    let moves = [];
    for (let i = 0; i < availableSpots.length; i++) {
      let move = {};
      move.index = newBoard[availableSpots[i]];
      newBoard[availableSpots[i]] = player;

      if (player == AI) {
        let result = Game.minimax(newBoard, HUMAN);
        move.score = result.score;
      } else {
        let result = Game.minimax(newBoard, AI);
        move.score = result.score;
      }

      newBoard[availableSpots[i]] = move.index;
      moves.push(move);
    }

    let bestMove;
    if (player == AI) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  }
}

// Game.startGame();
const restart = document.getElementById("restart");
restart.addEventListener("click", Game.restartGame);

const easy = document.getElementById("easy");
easy.addEventListener("click", Game.setEasyMode);

const hard = document.getElementById("hard");
hard.addEventListener("click", Game.setHardMode);
