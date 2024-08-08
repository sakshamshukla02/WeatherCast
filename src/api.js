import axios from "axios";
export async function getWeatherData(city)
{
    try{
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_WEATHER_KEY}`);
        return (response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
export async function getWeatherDataUsingLocation(lat,lon)
{
    try{
        console.log(lat,lon);
        
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APP_WEATHER_KEY}`);
        return (response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
