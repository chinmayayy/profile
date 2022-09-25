import React, {useState} from 'react';
import './App.css';
import Navbar from './pages/navbar';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;