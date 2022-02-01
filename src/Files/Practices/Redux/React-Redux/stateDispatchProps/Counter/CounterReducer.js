import {INCR,DECR} from './CounterType';

const InitialValue = {
    counter:0
}
const CounterReducer = (state=InitialValue,action)=>{
    switch(action.type){
        case INCR:return{
            counter:state.counter+1
        }
        case DECR:return{
            counter:state.counter-1
        }
        default:return state
    }
}
export default CounterReducer;