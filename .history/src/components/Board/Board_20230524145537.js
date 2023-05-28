import Square from "../Square/Square";
import './Board.css';

const Board = ({squares, onClick}) =>{

    const createSquare = values =>(
        values.map( value => (
           <Square 
           onClick = () => onC
           value={squares[value]}
           key={`square_${value}`} 
           />
        ))
    )
    return(
        <div className="board">
            <div className="row">
                {createSquare([0,1,2])}
            </div>
            <div className="row">
                {createSquare([3,4,5])}
            </div>
            <div className="row">
                {createSquare([6,7,8])}
            </div>

        </div>
    )
}

export default Board;