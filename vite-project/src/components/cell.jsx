const onClick = (e) => {
    console.log('clicked',e.target);
}
export default function Cell({value}) {
    return (
        <div className="cell" onClick={(e) => onClick(e)} >
            {value}
        </div>
    );
}