import { useState } from "react";
import Addition from "./Addition";

const MainForm = () => {

    const [firstNum, setFirstNum] = useState("firstNumber")
    const [secondNum, setSecondNum] = useState("secondNumber")

    let sumOfNum 


    return (
        <div className="form-container">
            <form >
                <h1>Addition of numbers</h1>
                <div className="first-number">
                    <label className="first-name-label" htmlFor="first-number">First Number: </label>
                    <input className="inputs" value={firstNum} onChange={(e) => {setFirstNum(e.target.value)}} placeholder="Enter First Number" type="number" id="first-number" />
                </div>
                <div className="second-number">
                    <label className="second-name-label" htmlFor="second-number">Second Number: </label>
                    <input className="inputs" value={secondNum} onChange={(e) => {setSecondNum(e.target.value)}} placeholder="Enter Second Number" type="number" id="second-number" />
                </div>
                <Addition firstNum={firstNum} secondNum={secondNum} />
            </form>
            
            

            
        </div>
    );
}
 
export default MainForm;