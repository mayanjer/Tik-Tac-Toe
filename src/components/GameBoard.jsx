import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [currentBoard, setCurrentBoard] = useState(initialBoard);

  function clickHandler(rowIndex, colIndex) {
    setCurrentBoard(
      (previousBoard) => {
        const updatedBoard = [...previousBoard.map((pre) => [...pre])]
        updatedBoard[rowIndex][colIndex] = "X"
        return updatedBoard
      }
    );
  }
  return (
    <ol id="game-board">
      {currentBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => clickHandler(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
