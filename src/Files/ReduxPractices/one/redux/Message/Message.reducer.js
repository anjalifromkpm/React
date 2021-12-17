import {GM,GN} from './Message.action';

let stateInitialize = {
    message:'Hello'
}
let MessageReducer = (state=stateInitialize,action)=>{
    switch(action.type){
        case GM:
            return {message:'Good Morning'};
        case GN:
            return {message:'Good Night'};
        default:
            return state;
    }
}
export {MessageReducer};