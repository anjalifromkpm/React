import React from 'react';

function One() {
    // inline style sheet
    let style = {
        color:'blue',
        fontSize:'30px',
        backgroundColor:'red'
    }
    return (
        <div style={style}>
                Hello world
        </div>
    )
}

export default One;
