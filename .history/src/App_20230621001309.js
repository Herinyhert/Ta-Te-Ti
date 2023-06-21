import { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./App.css";
import Board from "./components/Board/Board";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import Landing from "./components/Landing/Landing";

const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquare] = useState([]);
  const [winner, setWinner] = useState(null);
  const [showWinnerMessage, setShowWinnerMessage] = useState(false);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const reset = () => {
    setTurn("X");
    setSquares(Array(9).fill(null));
    setWinningSquare([]);
  };

  const handlePlayerNamesSubmit = () => {
    setPlayerNames(player1Name, player2Name);
    Navigate("/home");
  };

  const setPlayerNames = (name1, name2) => {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
  };

  const checkForWinner = (newSquares) => {
    for (let i = 0; i < winningPosition.length; i++) {
      const [a, b, c] = winningPosition[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        //existe un ganador
        endGame(newSquares[a], winningPosition[i]);
        return;
      }
    }
    if (!newSquares.includes(null)) {
      //existe  un empate
      endGame(null, Array.from(Array(10).keys()));
      return;
    }
    setTurn(turn === "X" ? "O" : "X");
  };

  const handleClick = (square) => {
    let newSquare = [...squares];
    newSquare.splice(square, 1, turn);
    setSquares(newSquare);
    checkForWinner(newSquare);
  };

  const endGame = (result, winningPosition) => {
    setTurn(null);
    let winnerName = null;
    if (result !== null) {
      winnerName = result === "X" ? player1Name : player2Name;
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
    }
    setWinningSquare(winningPosition);
    setWinner(winnerName);
    setShowWinnerMessage(true);
    setTimeout(() => {
      setShowWinnerMessage(false);
      reset();}, 2000);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="*"
            element={
              <Landing
                player1Name={player1Name}
                setPlayer1Name={setPlayer1Name}
                player2Name={player2Name}
                setPlayer2Name={setPlayer2Name}
                handlePlayerNamesSubmit={handlePlayerNamesSubmit}
              />
            }
          />
          <Route
            exact
            path="/home"
            element={
              <>
                <Board
                  winningSquares={winningSquares}
                  turn={turn}
                  squares={squares}
                  onClick={handleClick}
                  player1Name={player1Name}
                  player2Name={player2Name}
                />
                <ScoreBoard
                  scoreO={score.O}
                  scoreX={score.X}
                  player1Name={player1Name}
                  player2Name={player2Name}
                  turn={turn}
                  winner={winner}
                  showWinnerMessage={s}
                />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
