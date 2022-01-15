import React,{useState} from "react";
import One from './One';

const Parent = ()=>{
    const [message,setmessage] = useState('Hello');
    const updateHandler = ()=>{
        setmessage('Good Morning')
    }
    return(<>
        <p>{message}</p>
        <One updateHandler={updateHandler}/>
    </>)
}
export default Parent;