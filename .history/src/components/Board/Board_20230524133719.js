const Board = ({squares}) =>{

    const createSquare = value =>{
        value.map( value => {
            <div>{value}</div>
        })
    }
    return(
        <div className="board">
            <div className="row">
                {createSquare([0,1,2])}
            </div>
            <div className="row">
                {createSquare([0,1,2])}
            </div>
            <div className="row">
                
            </div>

        </div>
    )
}

export default Board;