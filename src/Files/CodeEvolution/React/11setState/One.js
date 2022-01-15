import React,{useState} from "react";

const One = ()=>{
    const [count,setCount] = useState(0);

    // const updateHandlerINC = ()=>{
    //     setCount(count+1)
    // }
    // const updateHandlerDEC = ()=>{
    //     if(count>0){
    //         setCount(count-1)
    //     }else{
    //         setCount(count)
    //     }
    // }
    return(<div  className="text-center">
                <h1>Counter: {count}</h1>
                {/* <button onClick={updateHandlerINC}>INCR</button><button onClick={updateHandlerDEC}>DECR</button> */}
                <button onClick={()=>{
                    setCount(count+1)
                }}
                >INCR</button>
                <button onClick={()=>{
                    if(count>0){
                        setCount(count-1)
                    }else{
                        setCount(count)
                    }
                }}>DECR</button>
          </div>)
}
export default One;