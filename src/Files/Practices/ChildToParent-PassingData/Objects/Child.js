import React from 'react';

function Child({Handler}) {
    const data=[
        {
            name:'karthik',
            age:23
        },
        {
            name:'suresh',
            age:25
        },
        {
            name:'shankar',
            age:29
        }
    ]
    return (
        <div>
            <button onClick={()=>{Handler(data)}}>Click Me</button>
        </div>
    )
}

export default Child;
