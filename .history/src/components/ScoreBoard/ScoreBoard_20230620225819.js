import "./ScoreBoard.css";

const ScoreBoard = ({ scoreX, scoreO, player1Name, player2 }) => (
  <div>
    <div className="score-board">
      <div>{scoreX}</div>
      <div>{scoreO}</div>
    </div>
    <div>{player1Name}</div>
  </div>
);

export default ScoreBoard;
