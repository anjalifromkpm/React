import {MATHS,SOCIAL,RULED,UNRULED,BLUE,BLACK} from './BagsType';

const intialValues = {
    maths:35,
    social:60,
    ruled:0,
    unruled:0,
    blue:0,
    black:0
}
const bagsReducers = (state=intialValues,action)=>{
    switch(action.type){
        case MATHS:return{
            ...state,
            maths:state.maths+1
        }
        case SOCIAL:return{
            ...state,
            social:state.social+1
        }
        case RULED:return{
            ...state,
            ruled:state.ruled+1
        }
        case UNRULED:return{
            ...state,
            unruled:state.unruled+1
        }
        case BLUE:return{
            ...state,
            blue:state.blue+1
        }
        case BLACK:return{
            ...state,
            black:state.black+1
        }
        default: return state;
    }
}
export default bagsReducers;