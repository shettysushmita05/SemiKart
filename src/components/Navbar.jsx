import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            {/* Top Contact Section */}
            <div className="fixed-top-contact headerContacts">
                <div className="container">
                    <div className="contacts">
                        <div>
                            <a href="tel:9113999367" aria-label="Call Semikart">
                                <img className="phoneCall" src="https://www.semikart.com/img/social-icons/phone-receiver-silhouette.webp" alt="Phone Logo" />
                                <span className="ml-1">Sales Enquiries (+91 9113999367)</span>
                            </a>
                        </div>
                        <div className="contactDivider">|</div>
                        <div>
                            <a rel="noreferrer noopener" aria-label="Chat on WhatsApp" href="https://wa.me/919113999367" target="_blank">
                                <img className="whatsapp" src="https://www.semikart.com/img/social-icons/whatsapp.webp" alt="WhatsApp Logo" />
                                <span className="ml-1">Chat With Us!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg menu-bg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/" aria-label="Semikart Homepage">
                        <img className="img-logo" src="https://www.semikart.com/img/new2018/home/semikart-logo.svg" alt="Semikart Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/categoryHome">Products</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Newest Products</a></li>
                                    <li><a className="dropdown-item" href="#">Popular Products</a></li>
                                    <li><a className="dropdown-item" href="/categoryHome">Categories</a></li>
                                    {/* Add more dropdown items as needed */}
                                    <li>
                                        <a className="dropdown-item" href="/categoryHome">View All</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/allManufacturers">Manufacturers</a></li>
                            <li className="nav-item"><a className="nav-link" href="/suppliers">Suppliers</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-toggle="dropdown">Tools</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/reDirectToBOM">BOM</a></li>
                                    <li><a className="dropdown-item" href="/requestForQuote">RFQ</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
                            <li className="nav-item"><a className="nav-link" href="/partnerWithUs">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <div class="mt-2">
							<a href="mailto:orders@semikart.com" class="btn"> <i class="icon-mail c464646" title="orders@semikart.com"></i>
							</a>
						</div>
                    
                    <div className="top_bar_user">
                        <div className="loginbtn ml-2">
                            <a href="/login" className="btn spec">Log In</a>
                            <a href="/register" className="btn spec ml-2">Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
