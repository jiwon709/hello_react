import './Button.css'

//props 에 대한 처리를 위한 js
function Button({ children, onClick, color = 'blue', className = ''}) { //실수로 color props를 전달하지 않으면 undifiend가 들어갈 수 있으니 디폴트 값 필요
    const classNames = `Button ${color} ${className}`;    //클래스명을 추가할 때 빈 공백이 필요하다
    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;