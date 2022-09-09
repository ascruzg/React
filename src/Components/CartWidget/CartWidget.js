import React from "react";
import "./CartWidget.css";
import imagenCarrito from '../../assets/shopping-cart.gif'

export const CartWidget =()=> {
    return(
        <img src={imagenCarrito} alt="logo" className="imagenCarrito"/>
    )
}

