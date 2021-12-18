import React from 'react';
import {DECAction,INCAction} from '../ReduxFolder/Counter/counter.action';
import { useDispatch,useSelector } from 'react-redux';

const Counter = ()=>{
    let Dispatch=useDispatch();
    let storeCounter=useSelector((state)=>{
        return state.counter;
    })
    const IncreHandler = ()=>{
        Dispatch(INCAction())
    }
    const DecreHandler = ()=>{
        Dispatch(DECAction())
    }
    return (
        <>
           <div className='mt-5 ms-2' style={{fontSize:'25px'}}>
            <i className="fas fa-plus-circle me-2 text-success" onClick={IncreHandler}></i>
            <b>{storeCounter.counter}</b>
            <i className="fas fa-minus-circle ms-2 text-success" onClick={DecreHandler}></i>
           </div>
        </>
    )
}

export default Counter;
