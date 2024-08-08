import { useState,createContext } from "react";
export const dataContext=createContext(null);

export const DataProvider=(props)=>{
    const [city,setCity]=useState("");
    const [weatherData,setWeatherData]=useState();
    return <dataContext.Provider value={{city,setCity,weatherData,setWeatherData}}>
        {props.children}
    </dataContext.Provider>
}
