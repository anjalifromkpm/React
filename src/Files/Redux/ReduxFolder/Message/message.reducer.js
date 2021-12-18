import {GM,GN} from './message.action';

let stateini={
    message:'Hello'
}
let messageReducer = (state=stateini,action)=>{
    switch(action.type){
        case GM:
            return {message:"Good Morning"}
        case GN:
            return {message:"Good Night"}
        default:
            return state
    }
}
export {messageReducer};