import classNames from "classnames";
import "./Square.css";
const Square = ({value, onClick, turn}) =>{

    const handleClick = () =>{
        (turn !== null && value === null && onClick())
    }

    let squareClass = classNames({
        s
    })

    return(
        <div className="square" onClick={ () => handleClick() } >

        </div>
    )
}

export default Square;