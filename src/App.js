import React from "react";

import Login from "./components/Login/Login";
import Conta from "./components/Conta/Conta"
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Signup from "./components/Signup/Signup";


function App() {
  
  
  return (
  <Router>
      <Routes>
      <Route path="/login" element = {<Login />} />
      <Route path="/conta" element = {<Conta />} />
      <Route path="/signup" element = {<Signup/>}/>
      <Route path="/" />
      </Routes>
  </Router>
  )
}
export default App;
