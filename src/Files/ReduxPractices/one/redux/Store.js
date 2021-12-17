import { createStore } from "redux";
import {MessageReducer} from './Message/Message.reducer';

let store = createStore(MessageReducer);

export {store};