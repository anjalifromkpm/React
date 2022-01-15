import React from 'react';
import Counter from './Counter/Counter';
import Message from './Message/Message';
import { Provider } from 'react-redux';
import store from '../../../../src/ReduxDemo/Store';
import PayloadCount from './NewPayload/PayloadCount';

const App = ()=>{
    return (
        <Provider store={store}>
            <div className='container'>
                <div className='row m-md-auto'>
                    <div className='col-md-6  m-md-auto text-center p-2'>
                        <Counter />
                    </div>
                    <div className='col-md-6 m-md-auto text-center p-2'>
                        <Message />
                    </div>
                </div> 
                <div className='row m-md-auto'>
                    <div className='col-md-6  m-md-auto text-center p-2'>
                        <PayloadCount />
                    </div>
                </div>   
            </div>
        </Provider>
    )
}

export default App;
