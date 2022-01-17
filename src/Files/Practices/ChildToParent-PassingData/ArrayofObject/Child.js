import React from 'react';

function Child({Handler}) {
    const cars = [{
        name:'altroz',
        brand:'tata',
        price:333000
    },
    {
        name:'audi',
        brand:'TATA',
        price:998958
    }]
    return (
        <div>
            <button onClick={()=>{Handler(cars)}}>Click Me</button>
        </div>
    )
}

export default Child;
