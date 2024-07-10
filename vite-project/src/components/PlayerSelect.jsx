//import { useState } from 'react';

function PlayerSelect() {
  //const [player1, setPlayer1] = useState('X');
  //const [player2, setPlayer2] = useState('O');
  return (
    <div className='bg-secondary col-12 p-2'>
     <h2>Choose your weapon!</h2>
     <div className='row'>
      <input className="col-3 ms-auto" type="text" name="player1" id="p1" />
      <input className="col-3 me-auto" type="text" name="player2" id="p2" />
     </div>
     <div className='row'>
      <button className="col-3 ms-auto" onClick={() => {console.log('X')}}>X</button>
      <button className="col-3 me-auto px-2" onClick={() => {console.log('O')}}>O</button>
     </div>
      
    </div>
  );
}

export default PlayerSelect;