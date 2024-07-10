import Cell from './cell';

export default function Grid({ grid }) {
    return (
        <div className="grid">
            {grid.map((row, i) => (
                <div key={i} className="row">
                    {row.map((cell, j) => (
                        <Cell key={[i,j]} value={cell}/>
                    ))}
                </div>
            ))}
        </div>
    );
}