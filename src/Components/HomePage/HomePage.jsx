import React, { useState } from "react";
// import React from 'react'
import logo from "../Assets/Trinity.png"
import logo1 from "../Assets/icons8-head-50 1.png"
import logo2 from "../Assets/icons8-curved-arrow-downward-32 2.jpg"
import logo3 from "../Assets/icons8-folder-24 2.png"
import logo4 from "../Assets/icons8-curved-arrow-downward-32 3.png"
import logo5 from "../Assets/icons8-book-50 2.png"
import logo6 from "../Assets/icons8-curved-arrow-downward-32 4.jpg"
import logo7 from "../Assets/icons8-setting-24 1.jpg"
import logo8 from "../Assets/icons8-curved-arrow-downward-32 1.png"
import logo9 from "../Assets/icons8-document-48 2.png"
import logo10 from "../Assets/Rectangle 30 (1).png"
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import SignUp from "../SignUp/SignUp";
import bodyimage from "../Assets/eB0MfDXYTWFrQ7m1N.png"


const HomePage = () => {
    const [clicked, setClicked] = useState(false);
    const handleButtonClick = ()=>{
        setClicked(true);
    }

  return (
    <div className="HomePage" >

    <div className="parent-element">
        <div className="HomeHeader-home">
             <h1>TRINITY UNIVERSITY<br/> E-REPOSITORY</h1>
             <p>As the education sector grows, it must be utilized to the fullest extent possible. In order to enable students to access materials posted by faculty that will be easily accessible to classes that will graduate in the future</p>

             <div className="Home-Button" style={{
                display:"flex",
                justifyContent: "space-evenly",
                 padding:"40px"
            }}>
            <div className="LogSgn-btn">
            <Link to="/Login" className="LogIn-button" onClick={handleButtonClick}>Log In</Link>
            <Routes>
            <Route exact path="/Login" element={<LoginForm/>} />
            </Routes>
            <Link to="/SignUp" className="SignUp-button" onClick={handleButtonClick}>Sign Up</Link>
            <Routes>
            <Route exact path="/SignUp" element={<SignUp/>} />
            </Routes>
            </div>
           
    </div>
    </div>

    </div>
        <div className="HomeLogo">
             <img src={logo} style={
                {   width: "500px",
                    height: "300px",
                    position: "absolute",
                    top:"100px",
                    right:"100px",
                    padding:"10px",
                    color: "transparent"    
                }} 
                alt="">
        </img>
        </div>

    

        
         
</div>  

  )
}

export default HomePage
