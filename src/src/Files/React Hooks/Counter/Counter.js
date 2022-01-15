import React,{useState} from 'react'

let Counter = ()=>{
    let [Counter,setCounter]=useState(0);
    
    return (
        <>
          <div className='container mt-5'>
              {Counter}<br />
              <button onClick={()=>{setCounter(Counter+1)}} className='mt-3 btn btn-warning'>INCRE</button>
              <button onClick={()=>{setCounter(Counter-1)}} className='mt-3 btn btn-warning'>INCRE</button>
          </div>
        </>
    )
}
export default Counter;
