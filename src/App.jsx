import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePLayer] = useState("X");
  const [gameTurns, setGameTurn] = useState([]);

  function onSelectHandler(rowIndex, colIndex) {
    setActivePLayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurn((previousTurns) => {
      let currentPlayer = "X";

      if (previousTurns.length > 0 && previousTurns[0].player == "X")
        [(currentPlayer = "O")];
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...previousTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer == "O"} />
        </ol>
        <GameBoard
          onSelect={onSelectHandler}
          activePlayerSymbol={activePlayer}
          turns={gameTurns}
        />
      </div>
      <Logs />
    </main>
  );
}

export default App;
