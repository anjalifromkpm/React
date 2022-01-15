import React,{useState} from 'react';

function Two() {
    const [Couter,setCounter] = useState(0);
    const clickHandler = ()=>{
        setCounter(Couter+1)
    }
    return (
        <div className='text-center'>
            <br />
            <h2 onMouseOver={clickHandler}>Couter {Couter} Hovered</h2>
        </div>
    )
}

export default Two;
