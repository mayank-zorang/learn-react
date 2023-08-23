import React, { useState } from "react"
import { LOGO_URL } from "../utils/constant";

export const Header = () =>{
    const [btnName, setBtnName] = useState("Login")
    // let btnName = "Login"
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                    <button 
                        className="login-btn" 
                        onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}
                    >
                        {btnName}
                    </button>
                </ul>   
            </div>
        </div>
    )
}

export default Header;

//yes we can use both named and default export in single file