import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
// import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
    
      
  
  );
}
export default App;
