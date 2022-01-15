import React from 'react';
import ChildCompo from './ChildCompo';

function ParentCompo() {
    let InpRef = React.createRef();
    const clickHandler = ()=>{
        InpRef.current.focus();
    }
    return (
        <div className='text-center '>
            <ChildCompo ref={InpRef}/>
            <button className='mt-2' onClick={clickHandler}>Foucs Input</button>
        </div>
    )
}

export default ParentCompo;
