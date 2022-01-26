import React from 'react';
import './App.css';
import Home from './home/Home';
import About from './about/About';
import Courses from './courses/Courses';
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="courses" element={<Courses/>}/>
        <Route path="about" element={<About/>}/>
        
      </Routes>
    </Router>

    
  );
}

export default App;
