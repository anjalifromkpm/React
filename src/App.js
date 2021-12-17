import React from "react";
import './Files/Practices/Router/Routing2/Style.css';
import Header from "./Files/Practices/Router/Routing2/Header";
import Home from "./Files/Practices/Router/Routing2/Home";
import About from './Files/Practices/Router/Routing2/About'
import Services from './Files/Practices/Router/Routing2/Services';
import WhyUs from './Files/Practices/Router/Routing2/WhyUs';
import Contact from './Files/Practices/Router/Routing2//Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/services" element={<Services />}/>
                            <Route path="/whyus" element={<WhyUs />}/>
                            <Route path="/contact" element={<Contact />}/>
                        </Routes>
                    </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;