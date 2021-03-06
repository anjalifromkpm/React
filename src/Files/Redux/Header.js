import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">Message</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="counter">Counter</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;
