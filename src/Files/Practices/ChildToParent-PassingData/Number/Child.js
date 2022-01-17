import React from 'react';

function Child({Handler}) {
    return (
        <div>
            <button onClick={()=>{Handler(23)}}>click me</button>
        </div>
    )
}

export default Child;
