import React from 'react';                
import Header from "./Components/Header/Header"
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"

const name="Andrey";
const welcome ="Welcome to Storage and Canopy"
const App =()=>{
  return (
    <div>
    <Header name={name} lastName="Cruz"></Header>
    <ItemListContainer greeding={welcome}/>
    </div>
    
    
    )
    
  }



export default App;
