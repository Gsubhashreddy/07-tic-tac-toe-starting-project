import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectPlayer, board }) {
  //   let gameBoard = initialGameBoard;

  //   for (const turn of turns) {
  //     const { square, player } = turn;
  //     const { row, col } = square;
  //     gameBoard[row][col] = player;
  //   }

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleButtonClick = (rowIndex, colIndex, symbol) => {
  //     if (gameBoard[rowIndex][colIndex] === null) {
  //       setGameBoard((prevBoard) => {
  //         const updatedBoard = [
  //           ...prevBoard.map((innerArray) => [...innerArray]),
  //         ];
  //         updatedBoard[rowIndex][colIndex] = symbol;
  //         return updatedBoard;
  //       });
  //       onSelectPlayer();
  //     }
  //   };
  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => {
              return (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectPlayer(rowIndex, colIndex)}
                    disabled={col !== null}
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
