import React,{useState} from 'react';

function Two() {
    const [isLoggedIn,setisLoggedIn] = useState(false)
    {/** Element Render **/}
    let message;

    if(isLoggedIn){
        message=<p>Welcomne karthik</p>;
    }else{
        message=<p>Welcome Guest</p>;
    }
    return(<>
        {message}
    </>)
}

export default Two;
