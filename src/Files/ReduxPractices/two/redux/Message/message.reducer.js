import {GM,GN} from './message.action';
let stateini = {
    msg:'Hello',
}
let messageReducer = (state=stateini,action)=>{
    switch(action.type){
        case GM:
            return {msg:'Morning'}
        case GN:
            return {msg:'Night'}
        default :
            return state;
    }
}
export {messageReducer};