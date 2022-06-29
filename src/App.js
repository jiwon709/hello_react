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
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]); //빈 배열 초기값

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        //gameHistory.push(nextNum);      //gameHistory 가 배열이니까 push 메서드로 nextNum을 추가한 다음
        //setGameHistory(gameHistory);    //setter 함수로 새 값이 추가된 gameHistory를 전달한다.
        setGameHistory([...gameHistory, nextNum]);   //gameHistory를 펼치고 뒤에 값을 붙인다.
        //배열이나 객체같은 참조형 state를 사용할 때는 메서드나 할당연산자로 값을 바꾸는게 아니라 반드시 새로운 값을 만들어서 변경해야 한다. (꼭 기억하기 !)


        /*   잠깐 설명 타임
        *    gameHistory : state 는 배열 값 자체를 가지고 있는게 아니라 그 배열의 주솟값을 참조하고 있다.
        *    때문에 push 메서드로 배열 안에 요소를 변경했다고 하더라도 결과적으로 참조하는 배열의 주솟값은 변경된 것이 아니다.
        * 
        *    리액트 입장에서는 gameHistory state가 참조하는 주솟값은 여전히 똑같기 때문에 상태(state)가 바뀌었다고 판단하지 않는 것
        *    그래서 참조형 state를 활용할 때는 반드시 새로운 참조형 값을 만들어 state를 변경해야 하는데
        *    가장 간닪나 방법이 Spread 문법(...)을 활용하는 것
        * 
        *    참조형 state를 활용할 땐 반드시 새로운 참조형 값을 만들어서 state를 변경해야 한다는 점. 꼭 기억!
        */
    };

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]); //초기값 전달
    };

    return (
    <div>
        <div>
            {/* <Button text="던지기" /> */}
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <div>
            <h2>나</h2>
            <Dice color="blue" num={num} /> 
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>  
    </div>);
    //join은 인자로 전달한 값을 배열의 각 요소들 사이사이에 넣어서 결과적으로 하나의 문장으로 만들어주는 메서드
}

export default App;