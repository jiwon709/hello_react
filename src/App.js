import Board from "./Board";
import Button from "./Button";
import { useState } from "react";

//각 컴포넌트의 state를 한 곳에서 관리하고 싶으면 
//부모 컴포넌트의 state로 옮겨서 props로 내려줄 수 있다
function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtehrHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtehrHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setMyHistory([]);
        setOtehrHistory([]);
    };


    return (
        <div>
            <div>
                {/* <Button text="던지기" /> */}
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory} />
                <Board name="상대" color="red" gameHistory={otherHistory} />
            </div>
        </div>
    );
}

export default App;