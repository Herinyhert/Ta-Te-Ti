const Board = ({squares}) =>{

    const createSquare = value =>{
        value.map( value => {
            <div>{}</div>
        })
    }
    return(
        <div className="board">
            <div className="row">

            </div>
            <div className="row"></div>
            <div className="row"></div>

        </div>
    )
}

export default Board;