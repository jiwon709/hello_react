import diceBlue01 from './assets/dice-blue-1.svg';

//이미지를 불러올 때는 import로 이미지 이름을 지정하고 경로를 불러온다
function Dice() {
    return <img src={diceBlue01} alt="주사위" />;
}

export default Dice;