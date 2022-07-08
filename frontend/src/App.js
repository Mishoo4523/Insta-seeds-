
import React from "react";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import CreatPost from "./components/pages/CreatPost";
import './App.css';


function App() {
  return (


      <BrowserRouter>

    <NavBar />

    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Signup" exact element={<Signup />} />
        <Route path="/Profile" exact element={<Profile />} />
        <Route path="/create-post" exact element={<CreatPost />} />


        {/* catch-all 404 page */}

   <Route path="*"  element={<page404 />}/>
        
    </Routes>

</BrowserRouter> 
    
    
  );
}

export default App;
