import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid secondary-header">
                    <div className="container">
                        <div className="row py-2">
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <p className="m-0 text-white d-flex align-items-center">
                                        <i className="bi bi-telephone me-3 header-icon-color"></i>
                                        <span>1 877 834 245 </span>
                                    </p>
                                    <p className="m-0 text-white ms-3 align-items-center">
                                        <i className="bi bi-envelope-open me-3 header-icon-color"></i>
                                        <span>info123@gmail.com</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-end">
                                    <p className="m-0 text-white d-flex align-items-center">
                                        <i className="bi bi-facebook me-3 header-icon-color"></i>
                                    </p>
                                    <p className="m-0 text-white d-flex align-items-center">
                                        <i className="bi bi-instagram me-3 header-icon-color"></i>
                                    </p>
                                    <p className="m-0 text-white d-flex align-items-center">
                                        <i className="bi bi-google header-icon-color"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/****** Section 2 ********/}
                <div className="container-fluid main-header">
                    <div className="container">
                        <div className="row py-3 d-flex align-items-center">
                        <div className="col-md-8">
                                    <div>
                                        <nav className="navbar navbar-expand-lg navbar-light">
                                            <div className="d-flex align-items-center">
                                                <Link className="navbar-brand" to="/">
                                                    <img src="https://themebubble.com/demo/hotelluxe/luxuryhotel/wp-content/uploads/sites/7/2018/06/logo-1.png" alt="...."/>
                                                </Link>
                                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                                </button>
                                                <div className="collapse navbar-collapse ps-5" id="navbarScroll">
                                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-end w-100">
                                                    <li className="nav-item">
                                                        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/about" className="nav-link">About</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/services" className="nav-link">Services</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/whyus" className="nav-link">Why Us</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/contact" className="nav-link">Contact</Link>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>                    
                            <div className="col-md-4 d-flex justify-content-end">  
                                <div>
                                    <button className="btn btn-bg-color py-2 px-4 rounded-0">Book Now</button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>

                {/****** Section 2 ********/}
                <div className="container-fluid sliders bg-success">
                    <div className="row">
                        <div>
                            <div className="col-12">

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;