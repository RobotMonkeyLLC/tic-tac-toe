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
      setMessage(`${player === 'X' ? player1 : player2}'s turn! Play ${player}!`);
    }
  }, [player, player1, player2, startGame]);

  useEffect(() => {
    const checkWinner = () => {
      //check rows
      for (let i = 0; i < 3; i++) {
        if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] && grid[i][0] !== '') {
          setMessage(`${grid[i][0]} wins!`);
          setStartGame(false);
          return;
        }
      }
      //check columns
      for (let i = 0; i < 3; i++) {
        if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[0][i] !== '') {
          setMessage(`${grid[0][i]} wins!`);
          setStartGame(false);
          return;
        }
      }
      //check diagonals
      if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== '') {
        setMessage(`${grid[0][0]} wins!`);
        setStartGame(false);
        return;
      }
      if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] !== '') {
        setMessage(`${grid[0][2]} wins!`);
        setStartGame(false);
        return;
      }
      //check draw
      if (grid.every(row => row.every(cell => cell !== ''))) {
        setMessage('Draw!');
        setStartGame(false);
        return;
      }
    }
    checkWinner();  
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
        setStartGame={setStartGame}
        setGrid={setGrid}/>
      }
    </>
  )
}

export default App
