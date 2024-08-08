import React from 'react';
import '../App.css'
import { useContext } from 'react';
import { dataContext } from './context';
import { getWeatherData } from '../api';
import { getWeatherDataUsingLocation } from '../api';
import { useEffect } from 'react';
const WeatherCard = () => {
  const data=useContext(dataContext);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(async (position)=>{
      let latitude=position.coords.latitude;
      let longitude=position.coords.longitude;
      let dataValue=await getWeatherDataUsingLocation(latitude,longitude);
      data.setWeatherData(dataValue);
    },(error)=>{
      console.log(error);
    })
  },[]);
  function handleChange(event)
  {
    const {value}=event.target;
    data.setCity(value);
  }
  async function handleSubmit()
  {
    
    console.log(data.city);
    const result=await getWeatherData(data.city);
    data.setCity("");
    data.setWeatherData(result);
  }
  return (
    <div className='card'>
      <div>
        <input  onChange={handleChange} type="text"  value={data.city} placeholder={data.city!=""?data.city:"Enter the city"} />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {data.weatherData && <div id="cardDetail">
        <p>City :{data.weatherData.name}</p>
        <p>Latitude :{data.weatherData.coord.lat}  </p> 
        <p> Longitude :{data.weatherData.coord.lon}  </p>
        <p>Weather :{data.weatherData.weather[0].description}</p>
        <p>
          Humidity :{data.weatherData.main.humidity}%
        </p>
        <p>Temperature :{Math.round(data.weatherData.main.temp) -273}C</p>
      </div>}
    </div>
  );
}

export default WeatherCard;
