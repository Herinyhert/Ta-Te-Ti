const Board = ({squares}) =>{

    const createSquare = value =>{
        value.map( value => {
            <div>{value}</div>
        })
    }
    return(
        <div className="board">
            <div className="row">
                <div></div>
            </div>
            <div className="row"></div>
            <div className="row"></div>

        </div>
    )
}

export default Board;