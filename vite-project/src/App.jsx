import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid'
import PlayerSelect from './components/PlayerSelect.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Choose A weapon!')
  const [grid, setGrid] = useState([['','',''],['','',''],['','','']])
  const [player, setPlayer] = useState('X')

  return (
    <>
      <h1>
        Tic Tac Toe
      </h1>
      
      <h2>{message}</h2>
      {<PlayerSelect /> ||
      <Grid grid={grid} show='none'/>
      }
    </>
  )
}

export default App
