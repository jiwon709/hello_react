import ReactDOM from 'react-dom/client';

//react 컴포넌트 형식
//밑에서 쓰이는 Hello 태그는 Hello함수가 return 하는 react element 를 의미
function Hello() {  //반드시 대문자로 시작
    return <h1>안녕 리액트</h1>;    //jsx문법으로 쓰인 react Element를 return 해야 한다.
}

const element = (
    <>
        <Hello />
        <Hello />
        <Hello />
    </>
);

//ReactDOM.render(element, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);