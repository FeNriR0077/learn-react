const Addition = ({firstNum, secondNum}) => {
    
    const sum = parseInt(firstNum) + parseInt(secondNum)

    return (
        <p className="sum-of-numbers"> 
            Sum of <span className="numbers">{firstNum ? firstNum : "firstNumber"}</span> and <span className="numbers">{secondNum ? secondNum : "secondNumber"}</span> is <span className="numbers">{sum ? sum : "?"}</span>.
        </p>
    );
}
 
export default Addition;