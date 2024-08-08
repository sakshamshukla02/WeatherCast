import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import { DataProvider } from './components/context.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/weather' element={<App />}/>
      </Routes>
    </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
