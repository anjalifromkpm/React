import React, { Component } from 'react';
import Header from './Header/Header';
import Produts from './Body/Produts';
import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
            <>
               <Header />
               <Produts />
               <Footer /> 
            </>
        )
    }
}

export default App
