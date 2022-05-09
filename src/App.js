import Dice from "./Dice";

//props : 컴포넌트에 지정한 속성 (properties의 줄임말 / 각각의 속성은 prop 이라고 한다.)
function App() {
    return (
    <div>
        <Dice color="red" num={2} />
    </div>);
}

export default App;