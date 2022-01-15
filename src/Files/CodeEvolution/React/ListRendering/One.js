import React from 'react';

function One() {
    const names = ['karthik','suresh','shankar']
    const nameslist = names.map(elem=><ul> <li>{elem}</li></ul>)
    return (
        <div>
            {/* {
                names.map(elem=><ul> <li>{elem}</li></ul>)
            } */}
            {/* {
                names.map((elem,index)=>{
                    return(<>
                        <ul>
                            <li>{elem}</li>
                        </ul>
                    </>)
                })
            } */}
            {
                nameslist
            }
        </div>
    )
}

export default One;
