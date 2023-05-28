import "./Square.css";
const Square = ({value, onClick}) =>{

    const handleClick = () =>{
        turn !== value === null && onClick() 
    }

    return(
        <div className="square">

        </div>
    )
}

export default Square;