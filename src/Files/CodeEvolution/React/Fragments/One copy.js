import React from 'react';

function One() {
    // the return method it will only returns one elements
    // if you are rendering two elements the JSX will through the error
    return (
        <h1>Fragments demo</h1>
        // {/**<p>Hello world</p>**/}
        // 1. <></>
        // 2. <React.Fragment></React.Fragment>
    )
}

export default One;
