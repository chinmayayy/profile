import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import Home from './pages/home/home';
import Resume from './pages/resume/resume';
import Achievements from './pages/achievements/achievements';
import Community from './pages/communities/communities';
import Projects from './pages/projects/projects'
import Publications from './pages/publications/publications';
import reportWebVitals from './reportWebVitals';
import Navbar from './pages/navbar';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/achievements' element={ <Achievements /> }/>
      <Route path='/communities' element={ <Community /> }/>
      <Route path='/projects' element={ <Projects /> }/>
      <Route path='/publications' element={ <Publications /> }/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
