import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';


//첫 번째 아규먼트 값을 바탕으로 새로운 html 요소를 만든다.
//그 값을 두 번째 아규먼트 값에다가 집어넣는 방식으로 동작.
const root = ReactDOM.createRoot(document.getElementById('root'));  //html에 있는 root 요소 id 값을 가져온다.
root.render(<p className="hello">안녕 리액트!</p>);

root.render(
    <form>
        <label htmlFor='name'>이름</label>
        <input id='name' type='text' onBlur='' onFocus='' onMouseDown=''/>
    </form>
);

const root1 = ReactDOM.createRoot(document.getElementById('root1'));

//Fragment를 생략하고 <> </> 로도 작성가능.
root1.render(
    <Fragment>
        <p>안녕</p>
        <p>리액트!</p>
    </Fragment>
);