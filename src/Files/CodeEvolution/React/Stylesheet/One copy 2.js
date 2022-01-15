import React from 'react';
import './Style.css';

function One() {
    let className = false;
    let prime = className?"primary":'wi';
    // external style sheet
    return (
        <div className={`${prime}`}>
                Hello world
        </div>
    )
}

export default One;
