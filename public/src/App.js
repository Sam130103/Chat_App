
import React from 'react'
import Register from './pages/register.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './pages/chat.js';
import Login from './pages/login.js';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Chat/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}



