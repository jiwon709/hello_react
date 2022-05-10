import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
    return Math.ceil(Math.random() * n);
}

//props : 컴포넌트에 지정한 속성 (properties의 줄임말 / 각각의 속성은 prop 이라고 한다.)
function App() {
    //state를 쓰기 위해 useState먼저 불러와야 한다.
    //num으로 변경하는게 아니라 setNum 을 이용해서 num을 바꿔줘야 한다.
    const [num, setNum] = useState(1);  //파라미터로 초기값 전달받는다. 실행 후, 배열의 요소로 요소 2개를 리턴

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
    };

    const handleClearClick = () => {
        setNum(1);
    };

    return (
    <div>
        <div>
            {/* <Button text="던지기" /> */}
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <Dice color="red" num={num} />
    </div>);
}

export default App;