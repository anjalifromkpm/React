import React from 'react';
import Message from './Message/Messge';
import {store} from './ReduxFolder/Store';
import {Provider} from 'react-redux';
import Header from './Header';
import Counter from './Counter/Counter';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
let App = ()=>{
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Message />}/>
                        <Route path="/counter" element={<Counter />}/>
                    </Routes>
                </Router>
            </Provider>
        </>
    )
}

export default App;