import React from 'react';                
import Header from "./Components/Header/Header"
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import ItemCount from "./Components/ItemCount/ItemCount"
const name="Andrey";
const welcome ="Welcome to Storage and Canopy"

const stock =5;
const addOn=()=>{
  console.log("se ha agregado al carrito")
} 

const App =()=>{
  return (
    <>
    <Header name={name} lastName="Cruz"></Header>
    <ItemListContainer greeding={welcome}/>
    <ItemCount stock={stock} addOn={addOn} />
    </>
    
    
    )
    
  }



export default App;
