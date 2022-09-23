import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/home/home';
import Resume from './pages/resume/resume';
import About from './pages/about/about';
import reportWebVitals from './reportWebVitals';
import Navbar from './pages/navbar';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> }>
        <Route path='resume' element={ <Resume /> }/>
        <Route path='about' element={ <About /> }/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
