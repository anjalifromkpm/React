import { BUY_CAKE } from "./Type"

const initialState = {
    IceCream:10
}

const CreamReducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            IceCream:state.IceCream-1
        }
        default:return state
    }
}

export default CreamReducer;