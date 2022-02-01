import { combineReducers } from "redux";
import Reducers from './React-Redux/Basic/Cakes/Reducers';
import CreamReducer from './React-Redux/Basic/IceCreamUi/Reducer';
import CounterReducer from './React-Redux/stateDispatchProps/Counter/CounterReducer';
import MessageReducer from './React-Redux/stateDispatchProps/Message/MessageReducer';
import bagsReducers from './React-Redux/stateDispatchProps/Bags/BagsReducers';
import userReducer from './React-Redux/thunk-axios/Components/userReducer';

const rootReducer = combineReducers(
    {
        cake:Reducers,
        cream:CreamReducer,
        counter:CounterReducer,
        message:MessageReducer,
        books:bagsReducers,
        user:userReducer
    }
);

export default rootReducer;