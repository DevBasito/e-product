import { useState } from 'react';
import logo from './logo.svg';
import Nav from './Nav/Nav';
import Carousel from './Carousel/Carousel';
import './App.css'

function App() {
  

  return (
    <div className="px-8 py-5 md:px-20 md:py-5" id='App'>
      <Nav/>
      <Carousel/>
     
    </div>
  )
}

export default App
