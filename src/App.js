import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Food from './Components/Food';
import { FoodDetails } from './Components/FoodDetails';
import Header from './Components/Header';

export default function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    
    <Route path='/' element={<Food/>}/>
    <Route path='/:code' element={<FoodDetails/>}/>
   
    </Routes>

    </div>
  )
}
