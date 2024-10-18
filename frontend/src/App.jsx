import React from 'react'
import Home from './Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './Course/Courses';
import Signup from './components/Signup';
import { useAuth } from './context/AuthProvider';
function App() {
  const [authuser,setAuthUser]=useAuth();
  console.log(authuser);
  return (
    <>
  {/* <Home/>
       <Course/> */}
 
       <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/Course" element={authuser?<Courses/>:<Navigate to="/Signup" />}/>
       <Route path="/Signup" element={<Signup/>}/>
       </Routes>
        
       
    </>
  );
}

export default App
