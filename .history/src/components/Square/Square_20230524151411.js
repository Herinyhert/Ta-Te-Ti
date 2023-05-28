import classNames from "classnames";
import "./Square.css";
const Square = ({value, onClick, turn}) =>{

    const handleClick = () =>{
        (turn !== null && value === null && onClick())
    }

    let squareClass = classNames({
        Square: true,
        [`square--${value}`]: value !
    })

    return(
        <div className="square" onClick={ () => handleClick() } >

        </div>
    )
}

export default Square;