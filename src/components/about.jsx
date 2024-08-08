import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';
const about = () => {
  return (
    <>
        <Navbar/>
      <div className='about'>
        <h1>About Us</h1>
        <h3>Welcome to WeatherCast!</h3>
        <p>At WeatherCast, we are dedicated to providing accurate and up-to-date weather forecasts to help you plan your day with confidence. Our platform is designed to deliver reliable weather information in an easy-to-understand format</p>

      </div>
      <Footer/>
    </>
  );
}

export default about;
