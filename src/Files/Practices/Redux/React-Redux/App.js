import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Counter from './stateDispatchProps/Counter/Counter';
import Message from './stateDispatchProps/Message/Message';
import Users from './thunk-axios/Users';

const App = ()=>{
    return (<>
    <Provider store={store}>
        <Counter />
        <hr />   
        <Message />
        <hr />
        <Users />
    </Provider>
    </>)
}

export default App;
