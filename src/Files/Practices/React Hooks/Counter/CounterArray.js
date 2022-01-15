import React,{useState} from 'react'

let CounterArray=()=>{
    const [Products,setProducts]=useState([{
        name:'karthik',
        sal:20000,
        age:23,
        course:'React/java'
    }]);
    return (
        <>
           <div className='container mt-5'>
                <p>Product Name: <b>{Products[0].name}</b></p>
                <p>Product Name: <b>{Products[0].sal}</b></p>
                <p>Product Name: <b>{Products[0].age}</b></p>
                <p>Product Name: <b>{Products[0].course}</b></p>
                <button onClick={()=>{setProducts([{...Products[0],age:Products[0].age+1}])}}>Click & Update</button>
            </div> 
        </>
    )
}
export default CounterArray;
