import "./Square.css";
const Square = ({value, onClick, turn}) =>{

    const handleClick = () =>{
        (turn !== null && value === null && onClick())
    }

    return(
        <div className="square" onc >

        </div>
    )
}

export default Square;