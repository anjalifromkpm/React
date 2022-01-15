import React from 'react';

function Two(props) {
    return (
        <div className='text-center'>
            <br />
            <h2 onMouseOver={props.clickHandler}>Counter {props.Counter} clicked</h2>
        </div>
    )
}

export default Two;
