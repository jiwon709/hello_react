import Dice from "./Dice";

//props : 컴포넌트에 지정한 속성 (properties의 줄임말 / 각각의 속성은 prop 이라고 한다.)
function Board({ name, color, num, sum, gameHistory }) {
    return (
        <div>
            <h2>{name}</h2>
            <Dice color={color} num={num} /> 
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>  
    );
    //join은 인자로 전달한 값을 배열의 각 요소들 사이사이에 넣어서 결과적으로 하나의 문장으로 만들어주는 메서드
}

export default Board;