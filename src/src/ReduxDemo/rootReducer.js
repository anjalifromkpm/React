import {combineReducers} from 'redux';
import CounterReducer from './Counter/CounterReducers';
import MessageReducer from './Message/MessageReducer';

const rootReducer = combineReducers({
    CounterC:CounterReducer,
    MessageM:MessageReducer
});

export default rootReducer;

