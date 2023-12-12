import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const handleActivePlayer = () => {
    setActivePlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
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
        <GameBoard symbol={activePlayer} onSelectPlayer={handleActivePlayer} />
      </div>
    </main>
  );
}

export default App;
