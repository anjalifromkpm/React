import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Images/Logo .png';

const Header = ()=>{
    return (
        <>
            <header>
                <section className='bg-secondary-header'>
                    <div className="container py-2">
                        <div className="row py-1">
                            <div className="col-12">
                                <div className='gutter d-flex justify-content-end'>
                                    <p className='me-4 mb-0'><a href="tel:03955228854" className='text-white'><i className="bi bi-telephone-outbound-fill me-2"></i> 03955228854</a></p>
                                    <p className='mb-0'><a href="mailto:add@allgjrsionsdesign.com.au" className='text-white'><i className="bi bi-envelope-open-fill me-2"></i> add@allgjrsionsdesign.com.au</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='primary-header'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className='gutter'>
                                    <nav className="navbar navbar-expand-lg navbar-light py-2">
                                        <div className="container-fluid p-0">
                                            <Link className="navbar-brand" to="/">
                                                <img src={Logo} className='img-fluid'/>
                                            </Link>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav me-auto mb-lg- w-100 justify-content-end">
                                                    <li className="nav-item">
                                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="services">Services</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="projects">Projects</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="contact">Contact</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;
