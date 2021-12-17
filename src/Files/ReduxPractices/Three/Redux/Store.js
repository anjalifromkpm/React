import {createStore} from 'redux';
import {CounterReducer} from './Message/message.reducer';
let store = createStore(CounterReducer);
export {store};