//props 에 대한 처리를 위한 js
function Button({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>
}

export default Button;