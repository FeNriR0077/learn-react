import { useState } from "react";


const AddCities = ({handleSubmit}) => {
    const [myInput, setMyInput] = useState('')
    return (

        <div className="adding-cities">
            <input className="add-city-input inputs" type="text" value={myInput} onChange={(e) => {setMyInput(e.target.value)}} />
            <button className="submit-button" type="submit" onClick={()=> {handleSubmit(myInput,setMyInput)}}>Add</button>
        </div>

    );
}
 
export default AddCities;