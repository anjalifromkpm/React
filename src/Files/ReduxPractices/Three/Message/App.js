import React from 'react'
import Message from './Message';
import {store} from '../Redux/Store';
import {Provider} from 'react-redux'
let App = ()=>{
    return (
        <>
            <Provider store={store}>
                <Message /> 
            </Provider>
        </>
    )
}

export default App;
