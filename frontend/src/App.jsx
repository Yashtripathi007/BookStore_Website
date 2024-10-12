import React from 'react'
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './Course/Courses';
import Signup from './components/Signup';

function App() {
  return (
    <>
  {/* <Home/>
       <Course/> */}

       <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/Course" element={<Courses/>}/>
       <Route path="/Signup" element={<Signup/>}/>
       </Routes>
        
       
    </>
  );
}

export default App
