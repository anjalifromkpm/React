import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {IncrHandler,DecrHandler} from '../../../../../src/ReduxDemo/Counter/CounterAction';

const PayloadCount = ()=>{
    const [numberofCount,setnumberofCount]=useState(1);
    const dispatch = useDispatch();
    const counter = useSelector((store)=>{
        return store.CounterC.counter
    })
    return (
        <div className='gutter-gap p-2 border'>
            <div>
                <h2>Counter: {counter}</h2>
            </div>
            <div className='mt-5 d-md-flex'>
                <input type='text' value={numberofCount} className='form-control rounded-0 w-75' 
                onChange={e=>setnumberofCount(e.target.value)}/>
                <button className='btn btn-success bg-white text-success rounded-0 px-4 me-1 w-25'
                onClick={(numberofCount)=>{dispatch(IncrHandler(numberofCount))}}>INCR {numberofCount}</button>
            </div>
        </div>
    )
}

export default PayloadCount;
