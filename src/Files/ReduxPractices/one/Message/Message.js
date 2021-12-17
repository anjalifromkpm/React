import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {GmAction,GnAction} from '../../../../redux/Message/Message.actionge.action'

let Message = ()=>{
    let Dispatch = useDispatch();
    let storeMessage = useSelector((store)=>{
        return store.message;
    })
    let GmHandler = ()=>{
        //console.log('GmHandler')
        Dispatch(GmAction())
    }
    let GnHandler = ()=>{
        //console.log('GnHandler')
        Dispatch(GnAction())
    }
    return (
        <>
          <h1>Message : {storeMessage}</h1>  
          <button onClick={GmHandler}>GM</button>
          <button onClick={GnHandler}>GN</button>
        </>
    )
}
export {Message};
