import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePLayer] = useState("X");

  function onSelectHandler() {
    console.log("Hello");
    setActivePLayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard
          onSelect={onSelectHandler}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
