import React,{useState} from 'react';

function Counter(props) {
    const [Counter,setCounter] = useState(0);
    const clickHandler = ()=>{
        setCounter(Counter+1)
    }
    return (
        <div className='text-center'>
            {props.render(Counter,clickHandler)}
        </div>
    )
}

export default Counter;
