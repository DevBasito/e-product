import { useState } from 'react';
import logo from './logo.svg';
import Nav from './Nav/Nav';
import ProductPage from './Product/ProductPage';
import Modal from './Modal/modal';
import './App.css'

function App() {


  return (
    <div className="px-8 py-3 md:px-20 md:py-3 font-sans" id='App'>
      <Nav />
      <ProductPage />
      <Modal/>
      
      

    </div>
  )
}

export default App
