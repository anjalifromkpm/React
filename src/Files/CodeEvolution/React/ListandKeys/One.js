import React from 'react';

function One() {
    const names = ['karthik','suresh','shankar'];
    
    return (
        <div>
            {
                names.map((elem,uniquekey)=>{
                    return(
                        <ul key={uniquekey}> 
                            <li>{elem}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default One;
