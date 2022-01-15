import React,{useState} from 'react';

function Three() {
    const [isLoggedIn,setisLoggedIn] = useState(true)
    
    {/** Ternary Render **/}

    return(<>
        {
            (isLoggedIn)?<p>Hello karthik</p>:<p>Hello guest</p>
        }
    </>)
}

export default Three;
