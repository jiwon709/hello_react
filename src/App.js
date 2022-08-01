import Board from "./Board";
import Button from "./Button";
import { useState } from "react";
import './App.css';
import logoImg from './assets/logo.png';

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


    //새로 렌더링
    //'던지기' 같은 부분은 렌더링 되는게 불필요 -> Virtual DOM 사용 이유
    //변경사항들을 효율적으로 이용할 수 있다.
    //Virtual DOM : 효율적으로 화면을 처리할 수 있다
    return (
        <div className="App">
            <div>
                {/* <Button text="던지기" /> */}
                <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
                <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory} />
                <Board name="상대" color="red" gameHistory={otherHistory} />
            </div>
        </div>
    );
}

export default App;