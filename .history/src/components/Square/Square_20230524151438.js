import classNames from "classnames";
import "./Square.css";
const Square = ({value, onClick, turn}) =>{

    const handleClick = () =>{
        (turn !== null && value === null && onClick())
    }

    let squareClass = classNames({
        Square: true,
        [`square--${value}`]: value !== null,
    })

    return(
        <div className={} onClick={ () => handleClick() } >

        </div>
    )
}

export default Square;