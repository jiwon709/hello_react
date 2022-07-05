import Board from "./Board";
import Button from "./Button";
import { useState } from "react";


function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    //state들을 부모 컴포넌트로 가져온다
    //이렇게 자식 컴포넌트 state들을 부모 컴포넌트로 올려주는걸 state 리프팅이라고도 부른다
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtehrGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        const nextOtherNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
        setOtherNum(nextOtherNum);
        setOtherSum(otherSum + nextOtherNum);
        setOtehrGameHistory([...otherGameHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]); //초기값 전달
        setOtherNum(1);
        setOtherSum(0);
        setOtehrGameHistory([]);
    };


    return (
        <div>
            <div>
                {/* <Button text="던지기" /> */}
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
                <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
            </div>
        </div>
    );
}

export default App;