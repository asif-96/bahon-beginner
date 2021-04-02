import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.jpg';
import { Link, useParams } from 'react-router-dom';

const Header = (props) => {
    // const {isSignedIn} = useParams();
    const {isSignedIn, name} = props.visitor; 
    // console.log(isSignedIn);


    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light navbar-width">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="50" height="30"/>Bahon
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Destination</a> */}
                                <Link className="nav-link" to="/selectroad">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>                            
                        </ul>
                        {/* <button className="btn btn-outline-success me-2" type="button"><Link className="text-decoration-none text-dark" to="/login">Login</Link></button> */}
                        {
                            (props.visitor.isSignedIn) ? <button className="btn btn-outline-success me-2" type="button"><Link className="text-decoration-none text-dark" to="/login">{name}</Link></button>
                            :
                            <button className="btn btn-outline-success me-2" type="button"><Link className="text-decoration-none text-dark" to="/login">Login</Link></button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;