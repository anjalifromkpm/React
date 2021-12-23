import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    render() {
        return (
            <>
               <header id="header">
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="container-fluid justify-content-center py-1">
                        <Link className="navbar-brand py-2" to="/">
                            <h1 className="logo mb-0">Employees</h1>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/employees">Employees</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 d-flex justify-content-end">
                            <Link to="/register">
                                <button className="btn sp-btn rounded-0 me-1">Register</button> 
                            </Link>
                            <button className="btn sp-btn menu-btn rounded-0">SignUp</button>
                        </div>
                    </div>
                </nav>
               </header>
            </>
        )
    }
}

export default Header;
