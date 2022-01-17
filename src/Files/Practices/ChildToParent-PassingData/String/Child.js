import React from 'react';

function Child({Handler}) {
    return (
        <div>
            <button onClick={()=>{Handler('Karthik')}}>Click me</button>
        </div>
    )
}

export default Child;
