import { useState } from 'react';

function PlayerSelect({setPlayer, setPlayer1,setPlayer2, setStartGame}) {

  const startGame = (piece) => {
    if(document.getElementById("p1").value == '' || document.getElementById("p2").value == '') {
      alert('Please enter your names!');
    } else {
      setStartGame(true);
      setPlayer(piece);
    }
  }
  
  return (
    <div className='bg-secondary col-12 p-2 select'>
     <h2>Choose your weapon!</h2>
     <div className='row'>
      <input className="col-3 ms-auto me-1" type="text" name="player1" id="p1" onChange={(e) => setPlayer1(e.target.value)}/>
      <input className="col-3 me-auto ms-1" type="text" name="player2" id="p2" onChange={(e) => setPlayer2(e.target.value)}/>
     </div>
     <div className='row'>
      <button className="col-3 ms-auto me-1" onClick={() => {startGame('X')}}>X</button>
      <button className="col-3 me-auto ms-1" onClick={() => {startGame('O')}}>O</button>
     </div>
      
    </div>
  );
}

export default PlayerSelect;