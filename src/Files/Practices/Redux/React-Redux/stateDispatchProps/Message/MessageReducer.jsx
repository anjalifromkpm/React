import {GM,GA,GN} from './MessageType';

const InitialMessage = {
    message:'Hello'
}
const MessageReducer = (state=InitialMessage,action)=>{
    switch(action.type){
        case GM:return{
            ...state,
            message:'Good Morning'
        }
        case GA:return{
            ...state,
            message:'Good Afternoon'
        }
        case GN:return{
            ...state,
            message:'Good Night'
        }
        default:return state
    }
}

export default MessageReducer;