import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid'
import PlayerSelect from './components/PlayerSelect.jsx'

function App() {
  //const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Choose a weapon!')
  const [grid, setGrid] = useState([['','',''],['','',''],['','','']])
  const [player, setPlayer] = useState('X');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [startGame, setStartGame] = useState(false);

  //update message
  useEffect(() => {
    if (startGame === true) {
      setMessage(`${player === 'X' ? player1 : player2}'s turn`);
    }
  }, [player, player1, player2, startGame]);

  useEffect(() => {
    const lines = [
      [[0,0], [0,1], [0,2]],
      [[1,0], [1,1], [1,2]],
      [[2,0], [2,1], [2,2]],
      [[0,0], [1,0], [2,0]],
      [[0,1], [1,1], [2,1]],
      [[0,2], [1,2], [2,2]],
      [[0,0], [1,1], [2,2]],
      [[0,2], [1,1], [2,0]],
  ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grid[a[0]][a[1]] && grid[a[0]][a[1]] === grid[b[0]][b[1]] && grid[a[0]][a[1]] === grid[c[0]][c[1]]) {
        setMessage(`${player === 'X' ? player1 : player2} wins!`);
        setStartGame(false);
      }
    }
    if (grid.every(row => row.every(cell => cell))) {
      setMessage('Draw!');
      setStartGame(false);
    }
  }, [grid]);

  return (
    <>
      <h1>
        Tic Tac Toe
      </h1>
      <h2>{message}</h2>
      {startGame && 
        <Grid 
          grid={grid}
          setGrid={setGrid}
          player={player}
          setPlayer={setPlayer}/> ||
      <PlayerSelect 
        setPlayer={setPlayer} 
        setPlayer1={setPlayer1} 
        setPlayer2={setPlayer2} 
        setStartGame={setStartGame}/>
      }
    </>
  )
}

export default App
