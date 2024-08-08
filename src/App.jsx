import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div >
      <Navbar/>
      <div className='contact'>
      <div>
        <p>If you have any questions or feedback, feel free to contact us!. We look forward to hearing from you!</p>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
