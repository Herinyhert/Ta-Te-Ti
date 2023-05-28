import "./Square.css";
const Square = ({value, onClick, turn}) =>{

    const handleClick = () =>{
        (turn !== null && value === null && onClick())
    }

    return(
        <div className="square" onClick={ () => han } >

        </div>
    )
}

export default Square;