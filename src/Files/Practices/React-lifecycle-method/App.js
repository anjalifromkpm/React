import React from 'react';
import Header from './Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Class from './Class/Class';
import Function from './Functions/Function';

const App = ()=>{
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="class" element={<Class />}/>
                    <Route path="function" element={<Function />}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
