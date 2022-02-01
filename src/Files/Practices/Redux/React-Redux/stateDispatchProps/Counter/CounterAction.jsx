import {INCR,DECR} from './CounterType';

export const INCRCounterAction = ()=>{
    return{
        type:INCR
    }
}
export const DECRCounterAction = ()=>{
    return{
        type:DECR
    }
}