import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {IncrHandler,DecrHandler} from '../../../../../src/ReduxDemo/Counter/CounterAction';

const Counter = ()=>{
    const counter= useSelector((state)=>{
        return state.CounterC.counter
    })
    const Dispatch = useDispatch();
    return (
        <div className='gutter-gap p-2 border'>
            <div>
                <h2>Counter: {counter}</h2>
            </div>
            <div className='mt-5'>
                <button className='btn btn-success bg-white text-success rounded-0 px-4 me-1'
                onClick={()=>{Dispatch(IncrHandler())}}>INCR</button>
                <button className='btn btn-success bg-white text-success rounded-0 px-4 me-1'
                onClick={()=>{
                    if(counter>=1){
                        Dispatch(DecrHandler())
                    }else{
                        return counter
                    }
                }}>DECR</button>
            </div>
        </div>
    )
}

export default Counter;
