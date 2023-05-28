import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

const winningPosition = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

const App = () => {

  const [ turn, setTurn ] = useState("X");
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ score, setScore ] = useState({
    X:0,
    O:0,
  })

  const checkForWinner = squares =>{
    for(let i=0; i< winningPosition.length; i++){
      const [a,b,c] = winningPosition[i];
      
    }
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
