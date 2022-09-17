import React from "react";
import {ItemList} from "../ItemList/ItemList"
import {products} from "../../assets/products.js"
import { customFetch } from "../../Utils/customFetch";
import { useState,useEffect } from "react";


export const ItemListContainer =({greeding})=> {

    const [listProducts, setListProducts]= useState([])

    useEffect(()=>{
        customFetch(products.products)
            .then(res => setListProducts(res))
    },[])

    console.log(listProducts)


    return(
        <>
            <h1>{greeding}</h1>
            <ItemList listProducts={listProducts}/>

        </>
        
        )
}

