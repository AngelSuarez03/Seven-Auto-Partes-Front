import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Cart from './pages/Cart';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Cart' element={<Cart />} />
    </Routes>
  );
}

export default App
