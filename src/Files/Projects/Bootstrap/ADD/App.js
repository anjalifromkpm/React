import React from 'react';
import './Style.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const App = ()=>{
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/services' element={<Services />}/>
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App;
