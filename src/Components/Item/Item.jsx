const Item =({product})=>{
    return(
        <>
        <div>{product.title}</div>
        <img src={product.images[0]}></img>
        <div>${product.price}</div>
        </>
        
    )
}

export {Item}