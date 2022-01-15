import React from "react";
// import One from './One';
import Two from './Two';

const Message = ()=>{

    return(<>
        <h1 className="text-center">Message</h1><br />
        {/* <One name={'karthik'} age={23}/> */}
        <Two name={'karthik'} age={23}/>
    </>)
}
export default Message;