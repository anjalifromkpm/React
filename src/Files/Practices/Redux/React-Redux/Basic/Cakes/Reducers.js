import {BUY_CAKES} from './Type';

const initialCake = {
    Cake: 20
}

const Reducers = (state=initialCake,action)=>{
    switch(action.type){
        case BUY_CAKES:return{
            ...state,
            Cake:state.Cake-1
        }
        default:return state
    }
}
export default Reducers;