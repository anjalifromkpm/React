import {INCR,DECR} from './CounterActionType';

// ACTION

const IncrHandler = (numberofCount=1)=>{
    return{
        type:INCR,
        payload:numberofCount
    }
}

const DecrHandler = ()=>{
    return{
        type:DECR
    }
}

export {IncrHandler,DecrHandler};