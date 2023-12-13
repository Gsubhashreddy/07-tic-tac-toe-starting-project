import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Logs from './components/Logs';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O';
  }
  return currPlayer;
}
function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  let winner = null;
  const draw = gameTurns.length === 9 && winner === null;
  const [currPlayerNames, setPlayerNames] = useState({
    X: 'Player1',
    0: 'Player 2',
  });

  const handlePlayerName = (symbol, playerName) => {
    setPlayerNames((prevState) => {
      return { ...prevState, [symbol]: playerName };
    });
  };

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = currPlayerNames[firstSquare];
    }
  }

  function handleRematch() {
    setGameTurns([]);
  }

  const handleActivePlayer = (rowIndex, colIndex) => {
    // setActivePlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const currPlayer = derivedActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  };
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            name='Player 1'
            symbol='X'
            isActive={activePlayer === 'X' ? true : false}
            onPlayerChange={handlePlayerName}
          />
          <Player
            name='Player 2'
            symbol='O'
            isActive={activePlayer === 'O' ? true : false}
            onPlayerChange={handlePlayerName}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onSelectRematch={handleRematch} />
        )}
        <GameBoard board={gameBoard} onSelectPlayer={handleActivePlayer} />
      </div>
      <Logs turns={gameTurns} />
    </main>
  );
}

export default App;
