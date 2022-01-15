import React from 'react';
import {GmAction,GnAction} from '../ReduxFolder/Message/message.action';
import {useDispatch,useSelector} from 'react-redux';

let Message = ()=>{
    let Dispatch = useDispatch();
    let storeMessage = useSelector((state)=>{
        return state.message;
    })
    let GmHandler = ()=>{
        Dispatch(GmAction());
    }
    let GnHandler = ()=>{
        Dispatch(GnAction());
    }
    return (
        <>
            <h1>Message: {storeMessage.message}</h1>
            <button onClick={GmHandler}>GM</button>
            <button onClick={GnHandler}>GN</button>
        </>
    )
}

export default Message;