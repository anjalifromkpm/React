import React from 'react';
import {DecrAction,IncrAction} from '../Redux/Message/message.action';
import {useDispatch,useSelector} from 'react-redux';
let Message = ()=>{
    let Dispatch = useDispatch();
    let StoreCounter = useSelector((state)=>{
        return state.Counter
    })
    let IncrementHandler = ()=>{
        // console.log('IncrementHandler')
        Dispatch(IncrAction())
    }
    let DecrementHandler = ()=>{
        // console.log('DecrementHandler')
        Dispatch(DecrAction())
    }
    return (
        <>
          <h1>Counter: {StoreCounter}</h1> 
          <button onClick={IncrementHandler}>INCR</button> 
          <button onClick={DecrementHandler}>DECR</button> 
        </>
    )
}

export default Message;