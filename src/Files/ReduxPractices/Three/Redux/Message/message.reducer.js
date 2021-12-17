import {INCR,DECR} from './message.action';
let iniState = {
    Counter:0
}
let CounterReducer = (state=iniState,action)=>{
    switch(action.type){
        case INCR:
            return {
                Counter:state.Counter+1
            }
        case DECR:
            return {
                Counter:state.Counter-1
            }
        default :
            return state  
    }
}
export {CounterReducer};