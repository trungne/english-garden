import React from 'react';
import './App.css';

import Home from './home/Home';
import About from './about/About';
import Courses from './courses/Courses';
import { 
  BrowserRouter as Router, 
  Routes,
  Route } from "react-router-dom";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="courses" element={<Courses/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </Router>    
  );
}
