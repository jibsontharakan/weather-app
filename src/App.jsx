import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.css'
import WeatherDetails from './pages/WeatherDetails'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
 

  return (
    <>
    <Header/>
    <BrowserRouter>
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/weather" element={<WeatherDetails/>}/>
     </Routes>
     </BrowserRouter>
       <Footer/>
    </>
  );
}

export default App
