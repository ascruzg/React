

import {Item} from "../Item/Item.jsx"

const ItemList = ({listProducts})=>{
    console.log(listProducts)
    return(
        <>
            {listProducts.map((prod, i)=> < Item key={i}  product ={prod}/>)}
            
           
        </>
    )
}

export {ItemList}