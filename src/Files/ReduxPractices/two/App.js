import React from 'react';
import Message from './Message';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
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
