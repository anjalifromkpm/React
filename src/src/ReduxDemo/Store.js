import { createStore } from "redux";
//import CounterReducer from './Counter/CounterReducers';+
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools());

export default store;