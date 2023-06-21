import './ScoreBoard.css';

const ScoreBoard = ({scoreX, scoreO, player1Name}) => (
    <div className='score-board'>
        <div>{scoreX}</div>
        <div>{scoreO}</div>
        <div></div>
    </div>
);

export default ScoreBoard;