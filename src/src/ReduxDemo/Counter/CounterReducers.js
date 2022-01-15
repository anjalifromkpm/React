// import {INCR,DECR} from './CounterActionType';
// const iniCounter = {
//     counter:0
// }
// const CounterReducer = (state=iniCounter,action)=>{
//     switch(action.type){
//         case INCR:
//             return{
//                 ...state,
//                 counter:state.counter+1
//             }
//         case DECR:
//             return{
//                 ...state,
//                 counter:state.counter-1
//             }
//         default:
//             return state
//     }
// }

// export default CounterReducer;

import {INCR,DECR} from './CounterActionType';
const iniCounter = {
    counter:0
}
const CounterReducer = (state=iniCounter,action)=>{
    switch(action.type){
        case INCR:
            return{
                ...state,
                counter:state.counter+action.payload
            }
        case DECR:
            return{
                ...state,
                counter:state.counter-1
            }
        default:
            return state
    }
}

export default CounterReducer;