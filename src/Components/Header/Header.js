import React from "react";
import logo from '../../assets/logo.png'
import "./Header.css"

const Header =()=> {
    return (
        <header className="container_header">
            <img src={logo} alt="logo" className="main_logo"/>
             <nav className="NavMenu">
                   <a href="">Inicio</a>
                   <a href="">Store</a>
                   <a href="">Policy</a>
                   <a href="">Blog</a>
                   <a href="">Contact</a>

             </nav>
        </header>
    )
    
}

export default  Header;