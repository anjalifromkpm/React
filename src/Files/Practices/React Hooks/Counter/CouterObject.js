import React,{useState} from 'react'

let CounterObject = ()=>{
    const [Product,setProduct]=useState({
       p_name:'iphone 12s',
       P_price:20000,
       P_brand:'Apple',
       p_qty:0
    })
    
    return (
        <>
            <div className='container mt-5'>
                {JSON.stringify(Product)}
                <hr />
                <p>Product Name: <b>{Product.p_name}</b></p>
                <p>Product Price: <b>{Product.P_price}</b></p>
                <p>Product Brand: <b>{Product.P_brand}</b></p>
                <p>Product QTY: <b>{Product.p_qty}</b></p>
                <br />
                <button onClick={()=>{
                    setProduct({...Product,p_qty:Product.p_qty+1})
                }}>Increment</button>
            </div>
        </>
    )
}
export default CounterObject;
