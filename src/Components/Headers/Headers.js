import React from 'react';
import './Headers-style.css';
import logo from '../../assets/logo-1x.png';


const Headers = () => {
    return (
        <header className="header-section">
        <div className="container">
            <div className="nav-content">
                <div className="row">
                    <div className="col-md-5">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="options">
                            <div className="option">
                                <a href="/">Home</a>
                            </div>
                            <div className="option">
                                <a href="/dashboard/doctors">Doctors</a>
                            </div>
                            <div className="option">
                                <a href="/dental">Dental Services</a>
                            </div>
                            <div className="option">
                                <a href="/review">Reviews</a>
                            </div>
                            <div className="option">
                                <a href="/dashboard">Dashboard</a>
                            </div>
                            <div className="option">
                                <a href="/contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Headers;