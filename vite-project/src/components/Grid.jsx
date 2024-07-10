import Cell from './cell';

export default function Grid({ grid, setGrid , player, setPlayer}) {
    const updateCell = (i, j) => () => {
        const newGrid = grid.map(row => [...row]);
        if (newGrid[i][j] !== '') return;
        newGrid[i][j] = player;
        setGrid(newGrid);
        setPlayer(player === 'X' ? 'O' : 'X');
    }

    return (
        <div className="grid">
            <button onClick={() => setGrid([['','',''],['','',''],['','','']])}>Reset</button>
            
            {grid.map((row, i) => (
                <div key={i} className="row">
                    {row.map((cell, j) => (
                        <Cell key={[i,j]} value={cell} onClick={updateCell(i,j)}/>
                    ))}
                </div>
            ))}
        </div>
    );
}