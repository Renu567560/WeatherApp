import React, {useState} from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";



export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        
                city: "Delhi",
                feelslike: 29.78,
                temp: 31.05,
                tempMin: 31.05,
                temp_max: 31.05,
                humidity: 30,
                weather: "haze",
        
            
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);

    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}