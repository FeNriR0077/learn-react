import { useState } from "react";
import AddCities from "./AddCities";
import DisplayCities from "./DisplayCities";
import { Success, Error } from "../Notifications";

const Cities = () => {
    
    const [cityNames, setCityNames] = useState(["Kathmandu", "Butwal"]);
    const [alert, setAlert] = useState("")

    const handleSubmit = (myInput) => {
        if (myInput) {
            setCityNames(cityNames => [...cityNames,myInput])
            setAlert (<Success />)

            setTimeout(()=> {
                setAlert("")
            }, 2000)
        } else {
            setAlert(<Error />)

            setTimeout(()=> {
                setAlert("")
            }, 2000)
        }
        
    };

    return (

        <div className="Cities">  
            <h1>Cities to visit</h1>
            
            <DisplayCities cityNames={cityNames}/>
            <p className="input-info">(Shows error when blank field is sent)</p>
            <AddCities handleSubmit= {handleSubmit} />
            {alert}
        </div>
    );
}
 
export default Cities;