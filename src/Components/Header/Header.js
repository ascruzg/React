import React from "react";
import logo from '../../assets/logo.png'
import "./Header.css"
import {CartWidget} from "../CartWidget/CartWidget"
const menu= [
    {id:0, nombre : "Inicio"},
    {id:1, nombre : "Store"},
    {id:2, nombre : "Policy"},
    {id:3, nombre : "Blog"},
    {id:4, nombre : "Contact"},

]

const Header =(props)=> {
    return (
        <header className="container_header">
            <img src={logo} alt="logo" className="main_logo"/>
            <nav className="NavMenu">
                {
                   menu.map((link)=>{
                    return <a key ={link.id}  href=""> {link.nombre} </a> /*(esto es dinamico para consumir apis)Se crea un map con ud id porque este si me retorna algo para que react lo reconozca valido no se puede usar for*/ 
                   })
                }
            </nav>
        <p >{props.name} {props.lastName} </p>
           
        <CartWidget/>
        
        </header>
    )
    
}

export default  Header;