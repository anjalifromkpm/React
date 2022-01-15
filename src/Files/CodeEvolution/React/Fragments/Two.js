import React from 'react';

function Two() {
    // the return method it will only returns one elements
    // if you are rendering two elements the JSX will through the error
    return (
        <div>
            <h1>Fragments demo</h1>;
        </div>
    )
}

export default Two;
