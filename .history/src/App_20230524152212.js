import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

const

const App = () => {

  const [ turn, setTurn ] = useState("X");
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ score, setScore ] = useState({
    X:0,
    O:0,
  })

  const checkForWinner = squares =>{
    setTurn( turn === "X" ? "O" : "X");
  }

  const handleClick = square =>{
    let newSquare = [...squares];
    newSquare.splice(square, 1, turn);
    setSquares(newSquare);
    checkForWinner(newSquare);
  }

  return (
    <div className="container">
      <Board turn={turn} squares={squares} onClick={handleClick} />
    </div>
  );
}

export default App;
