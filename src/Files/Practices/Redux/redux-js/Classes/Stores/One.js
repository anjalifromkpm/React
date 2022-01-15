const redux = require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;

// Action 1

const INCR='INCR';

const IncrHandler = ()=>{
    return {
        type:INCR
    }
}
// Action 2

const RICE='RICE';

const RiceHandler = ()=>{
    return {
        type:RICE
    }
}

// Reducers
const  initialCounter= {
    counter:10
}
const countReducers = (state=initialCounter,action)=>{
    switch(action.type){
        case INCR:
            return {
                ...state,
                counter:state.counter-1
            }
        default:
            return state
    }
}
const  initialRice= {
    rice:20
}
const riceReducers = (state=initialRice,action)=>{
    switch(action.type){
        case INCR:
            return {
                ...state,
                rice:state.rice-1
            }
        default:
            return state
    }
}

// store
const rootReducers=combineReducers({
    countReducers,
    riceReducers
});
const store=createStore(rootReducers);
console.log('Initial Counter:', store.getState());
store.subscribe(()=>{ return console.log('Updated counter:',store.getState())})
store.dispatch(IncrHandler())
store.dispatch(IncrHandler())
store.dispatch(IncrHandler())
store.dispatch(RiceHandler())
store.dispatch(RiceHandler())
store.dispatch(RiceHandler())
