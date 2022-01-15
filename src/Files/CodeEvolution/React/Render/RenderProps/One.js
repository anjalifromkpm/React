import React from 'react';

function One(props) {
    return (
        <div className='text-center'>
            <button onClick={props.clickHandler}>Counter {props.Counter} clicked</button>
        </div>
    )
}

export default One;
