import React from 'react';

function Child({Handler}) {
    const arr = [1,2,3,4,5,6]
    return (
        <div>
            <button onClick={()=>{Handler(arr)}}>Click Me</button>
        </div>
    )
}

export default Child;
