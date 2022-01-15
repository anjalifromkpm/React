import React,{useState} from 'react';

function One() {
    const [isLoggedIn,setisLoggedIn] = useState(true)
    {/** If else Render **/}
    if(isLoggedIn){
        return <p>Welcomne karthik</p>;
    }else{
        return <p>Welcome Guest</p>;
    }
}

export default One
