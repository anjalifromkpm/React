import {INC,DEC} from './counter.action';

let stateini={
    counter:0
}
let counterReducer = (state=stateini,action)=>{
    switch(action.type){
        case INC:
            return {counter: state.counter+1}
        case DEC:
            return {counter: state.counter-1}
        default:
            return state
    }
}
export {counterReducer};