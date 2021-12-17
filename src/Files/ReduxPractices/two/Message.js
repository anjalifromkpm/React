import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {GnAction,GmAction} from './redux/Message/message.action'

let  Message = ()=>{
    let Dispatch = useDispatch();
    let msg = useSelector((state)=>{
        return state.msg;
    })
    let GnHandler = ()=>{
        //console.log('GOOD moning')
        Dispatch(GmAction());
    }
    let GmHandler = ()=>{
        //console.log('GOOD night')
        Dispatch(GnAction());
    }
    return (
        <>
           <h1>Message: {msg}</h1> 
           <button onClick={GmHandler}>GM</button>
           <button onClick={GnHandler}>GN</button>
        </>
    )
}

export default Message;
