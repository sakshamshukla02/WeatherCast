import React from 'react';
import '../App.css'

const Footer = () => {
    let time=new Date();
    let currentYear=time.getFullYear();
  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
}

export default Footer;
