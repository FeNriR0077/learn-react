const Addition = ({firstNum, secondNum}) => {
    
    const sum = parseInt(firstNum) + parseInt(secondNum)

    return (
        <p className="sum-of-numbers"> 
            Sum of {firstNum} and {secondNum} is {sum ? sum : "?"}.
        </p>
    );
}
 
export default Addition;