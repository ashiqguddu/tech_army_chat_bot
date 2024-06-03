import React from 'react'
import Login from "./Components/Login";
import '..\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
  <div className="container-fluid nav-back">
    <a className="navbar-brand" href="#">
      <img src="../../src/assets\photo_2024-06-03_14-38-16.jpg" alt="Bootstrap" width="130" height="70"/>
    </a>
  </div>
</nav>
      <Login></Login>

{/* __________ */}


      <div>
        <Routes>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/" element={<Login></Login>}></Route>

        </Routes>
      </div>
    </div>


// _____


  )
}

export default App
