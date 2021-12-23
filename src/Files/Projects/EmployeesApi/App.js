import React,{Component} from 'react';
import './Style.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** Pages **/
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Gallery from './Components/Pages/Gallery';
import Employees from './Components/Pages/Employees';
import Contact from './Components/Pages/Contact';
import Register from './Components/Pages/Register';

class App extends Component {
    render() {
        return (
            <>
               <BrowserRouter>
                <Header /> 
                <Routes>
                    <Route path="/" element={<Home />}/> 
                    <Route path="/about" element={<About />}/> 
                    <Route path="/services" element={<Services />}/> 
                    <Route path="/gallery" element={<Gallery />}/> 
                    <Route path="/employees" element={<Employees />}/> 
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/register" element={<Register />}/> 
                </Routes>
               </BrowserRouter>
               <Footer />
            </>
        )
    }
}

export default App;

