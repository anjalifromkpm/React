import {combineReducers} from 'redux';
import {counterReducer} from './Counter/counter.reducer';
import {messageReducer} from './Message/message.reducer';

const rootReducer = combineReducers({
    message:messageReducer,
    counter:counterReducer
})
export {rootReducer};