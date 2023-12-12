import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ symbol, onSelectPlayer }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleButtonClick = (rowIndex, colIndex, symbol) => {
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
      return updatedBoard;
    });
    onSelectPlayer();
  };
  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => {
              return (
                <li key={colIndex}>
                  <button
                    onClick={() =>
                      handleButtonClick(rowIndex, colIndex, symbol)
                    }
                  >
                    {col}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
