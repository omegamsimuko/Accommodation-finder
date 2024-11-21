import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";


// import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
    
      
  
  );
}
export default App;
