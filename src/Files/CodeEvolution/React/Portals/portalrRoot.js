import React from 'react';
import ReactDOM from 'react-dom';

const  portalrRoot = ()=>{
    // we will use this portals when we want to use modal,popup
    // the portals will react as a nomal react-child
    return ReactDOM.createPortal(
        <h1>
            portls root
        </h1>,
        document.getElementById('portal-root')
    )
}

export default portalrRoot;
