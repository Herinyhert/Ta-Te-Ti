import "./Square.css";
const Square = ({value, onClick, turn}) =>{

    const handleClick = () =>{
        (turn !== null && value === null && onClick())
    }

    let squareC

    return(
        <div className="square" onClick={ () => handleClick() } >

        </div>
    )
}

export default Square;