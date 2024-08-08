import React from 'react';
import Navbar from './Navbar';
import '../App.css'
import Footer from './Footer';
import WeatherCard from './WeatherCard';

const home = () => {

  return (
    <>    
     <Navbar/>
     <WeatherCard/>
    <Footer/>
    </>
 
  );
}

export default home;
