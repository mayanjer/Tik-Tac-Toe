import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player == "X") currentPlayer = "O";

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurn] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquaresymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquaresymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquaresymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquaresymbol &&
      firstSquaresymbol === secondSquaresymbol &&
      firstSquaresymbol === thirdSquaresymbol
    ) {
      winner = firstSquaresymbol;
    }
  }

  const hasDraw = ((gameTurns.length === 9) && !winner)

  function onSelectHandler(rowIndex, colIndex) {
    setGameTurn((previousTurns) => {
      const currentPlayer = deriveActivePlayer(previousTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...previousTurns,
      ];

      return updatedTurns;
    });
  }

  function rematchHandler() {
    setGameTurn([])
    gameBoard = initialBoard
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer == "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard
          onSelect={onSelectHandler}
          activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Logs turns={gameTurns} />
    </main>
  );
}

export default App;
