import React,{useState} from 'react';

function One() {
    const [Couter,setCounter] = useState(0);
    const clickHandler = ()=>{
        setCounter(Couter+1)
    }
    return (
        <div className='text-center'>
            <button onClick={clickHandler}>Couter {Couter} clicked</button>
        </div>
    )
}

export default One;
