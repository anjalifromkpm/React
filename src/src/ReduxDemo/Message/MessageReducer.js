import {GM,GA,GN} from './MessageActionType';

const iniMessage = {
    message:'Hello'
}

const MessageReducer = (state=iniMessage,action)=>{
    switch(action.type){
        case GM:
            return{
                message:'Good Morning' 
            }
        case GA:
            return{
                message:'Good Afternoon' 
            }
        case GN:
        return{
            message:'Good Night' 
        }
        default :
            return state
    }
}

export default MessageReducer;