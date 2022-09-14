import React,{useState} from "react";
import "./ItemCount.css"


const ItemCount =({stock,addOn})=> {
    const [contador, setContador]= useState(1);
    const sumar = ()=>{
        if(contador<stock){
            setContador(contador + 1);
        }
        else{
            console.log("stock alcanzado")
        }
    }

    const restar = ()=>{
        if (contador>1){
            setContador(contador -1);
        }
        
    }



    const reset = () =>{
        setContador(1);
    }
    return (
        <div>
            <h2>Camisa Negra</h2>
            <h3>{contador}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reset}>reset</button>
            <div>
                <button onClick={addOn}>addOn</button>
            </div>

            


        </div>
    )
    
}

export default  ItemCount;