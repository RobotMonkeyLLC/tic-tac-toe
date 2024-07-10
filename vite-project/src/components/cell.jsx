const onClick = (e) => {
    console.log('clicked',e.target);
}
export default function Cell({value, onClick=onClick}) {
    return (
        <div className="cell" onClick={(e) => onClick(e)} >
            {value}
        </div>
    );
}