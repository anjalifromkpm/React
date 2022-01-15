// (previousState,action)=> newstate
let initialState={
    numofCakes:10
}

const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return { 
                ...state,// if we copied state object now only updates numof cake object value.. it won't change remaining state objects
                numofCakes: state.numofCakes-1
             }
        default:
            return state
    }
}