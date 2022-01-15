// import redux from 'redux' ES6 
const redux = require('redux');
const createStore = redux.createStore;
// actions 
const BUY_CAKE='BUY_CAKE';

function bUY_CAKE(){
    return{
        type:BUY_CAKE
    }
}

// reducers
let initialState={
    noofCakes:10
}
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                noofCakes:state.noofCakes-1
            }
    }
}

// Store

const store=createStore(Reducer);
console.log('Initial state:',store.getState());
const unsubscribe=store.subscribe(()=>{return console.log('updated state:',store.getState())})
store.dispatch(bUY_CAKE())
store.dispatch(bUY_CAKE())
store.dispatch(bUY_CAKE())
unsubscribe()