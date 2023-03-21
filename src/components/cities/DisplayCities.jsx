const DisplayCities = ({cityNames}) => {
    return (
        <div className="all-city-names">
           {cityNames.map((city,index) => {
            return (
                <p className="city-names" key={index}>{city}</p>
            )
           })}
        </div>
    );
}
 
export default DisplayCities;