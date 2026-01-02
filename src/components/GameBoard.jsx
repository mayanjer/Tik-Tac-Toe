import { useState } from "react";
import { act } from "react-dom/test-utils";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, activePlayerSymbol }) {
  const [currentBoard, setCurrentBoard] = useState(initialBoard);

  function clickHandler(rowIndex, colIndex) {
    setCurrentBoard((previousBoard) => {
      const updatedBoard = [...previousBoard.map((pre) => [...pre])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    
  }
  onSelect();

  return (
    <ol id="game-board">
      {currentBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => 
                    clickHandler(rowIndex, colIndex)
               
                  }
                >
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
