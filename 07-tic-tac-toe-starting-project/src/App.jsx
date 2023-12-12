import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Logs from './components/Logs';
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const handleActivePlayer = (rowIndex, colIndex) => {
    setActivePlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let currPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currPlayer = 'O';
      }
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
          />
          <Player
            name='Player 2'
            symbol='O'
            isActive={activePlayer === 'O' ? true : false}
          />
        </ol>
        <GameBoard turns={gameTurns} onSelectPlayer={handleActivePlayer} />
      </div>
      <Logs turns={gameTurns} />
    </main>
  );
}

export default App;
