import React from "react"
import { LOGO_URL } from "../utils/constant";

export const Header = () =>{
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
                </ul>   
            </div>
        </div>
    )
}

export default Header;

//yes we can use both named and default export in single file