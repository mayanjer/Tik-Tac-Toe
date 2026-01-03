
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, turns}) {
  // const [currentBoard, setCurrentBoard] = useState(initialBoard);

  // function clickHandler(rowIndex, colIndex) {
  //   setCurrentBoard((previousBoard) => {
  //     const updatedBoard = [...previousBoard.map((pre) => [...pre])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelect();
  // }

  let gameBoard = initialBoard

  for (const turn of turns) {
    const { square, player } = turn
    const { row, col } = square
    
    gameBoard[row][col] = player
  }

 

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelect(rowIndex, colIndex)}>
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
