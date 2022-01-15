import React,{useState} from 'react';

function One() {
    let initialValue=0;
    const [Count,setCount] = useState(initialValue);
    const incrementFive = ()=>{
        for(let i=0;i<5;i++){
            // setCount it will accept on function/// it accepts one parameter and return parameter
            // setCount((previousCount)=>{return previousCount + 1})
            setCount(previousCount=> previousCount + 1)
        }
    }
    return (
        <div>
            <p>Count {Count}</p>
            <div>
                <button onClick={()=>{setCount(initialValue)}}>Reset</button>
                <button onClick={()=>{setCount(previousCount=>previousCount+1)}}>Increment</button>
                <button onClick={()=>{setCount(previousCount=>previousCount-1)}}>Decrement</button>
                <button onClick={incrementFive}>Increment (5)</button>
            </div>
        </div>
    )
}

export default One;
