
export default function GameBoard({ onSelect, board }) {
  // const [currentBoard, setCurrentBoard] = useState(initialBoard);

  // function clickHandler(rowIndex, colIndex) {
  //   setCurrentBoard((previousBoard) => {
  //     const updatedBoard = [...previousBoard.map((pre) => [...pre])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelect();
  // }


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelect(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
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
