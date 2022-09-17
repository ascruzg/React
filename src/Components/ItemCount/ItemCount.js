import React,{useState} from "react";
import "./ItemCount.css"


const ItemCount =({initial, stock,addOn})=> {
    const [contador, setContador]= useState(initial);
    const sumar = ()=>{
        if(contador<stock){
            setContador(contador + 1);
        }
        else{
            console.log("stock alcanzado")
        }
    }

    const restar =() => contador > 1 && setContador (contador -1)//esto es un circuito corto
      



    const reset = () =>{
        setContador(1);
    }
    return (
        <div>
            <h2>Camisa Negra</h2>
            
            <button disabled={contador===stock} onClick={sumar}>+</button>
            <span>{contador}</span>
            <button disabled={contador===initial} onClick={restar}>-</button>
            <div>            
                <button onClick={reset}>reset</button>
            </div>
            <div>
                <button onClick={addOn}>addOn</button>
            </div>

            


        </div>
    )
    
}

export default  ItemCount;