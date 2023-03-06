import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="footer-top-data d-flex gap-30 align-items-center justify-content-center">
                                <img
                                    src="/images/newsletter.png"
                                    alt="newsletter"
                                />
                                <h4 className="mb-0 text-white">
                                    Sign Up for Newsleatter
                                </h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    arial-aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text p-2"
                                    id="basic-addon2"
                                >
                                    Subscribe
                                </span>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row footer-links">
                        <div className="col-4">
                            <h5 className="text-white mb-4">Contact Us</h5>
                            <div>
                                <address className="text-white">
                                    Out Colony, Gangarampur <br />
                                    Dakshin Dinajpur, West Bengal
                                    <br />
                                    PinCode: 733124
                                </address>
                                <a
                                    href="tel: +917797454561"
                                    className="mt-3 d-block mb-1 text-white"
                                >
                                    +91-7797454561
                                </a>
                                <a
                                    href="mailto:sougatatalukdar77@gmail.com"
                                    className="mt-2 d-block mb-0 text-white"
                                >
                                    sougatatalukdar77@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                                    <a
                                        className="text-white social-icons"
                                        href="http://www.google.com"
                                    >
                                        <BsLinkedin className="fs-4" />
                                    </a>
                                    <a
                                        className="text-white social-icons"
                                        href="http://www.google.com"
                                    >
                                        <BsInstagram className="fs-4" />
                                    </a>
                                    <a
                                        className="text-white social-icons"
                                        href="http://www.google.com"
                                    >
                                        <BsGithub className="fs-4" />
                                    </a>
                                    <a
                                        className="text-white social-icons"
                                        href="http://www.google.com"
                                    >
                                        <BsYoutube className="fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5 className="text-white mb-4">Information</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link
                                    to="/privacy-policy"
                                    className="text-white py-2 mb-1"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    to="/refund-policy"
                                    className="text-white py-2 mb-1"
                                >
                                    Return Policy
                                </Link>
                                <Link
                                    to="/shipping-policy"
                                    className="text-white py-2 mb-1"
                                >
                                    Shopping Policy
                                </Link>
                                <Link
                                    to="/term-conditions"
                                    className="text-white py-2 mb-1"
                                >
                                    Terms & Conditions
                                </Link>
                                <Link
                                    to="/blogs"
                                    className="text-white py-2 mb-1"
                                >
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5 className="text-white mb-4">Account</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    About Us
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    FAQ
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-white py-2 mb-1"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    Laptops
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Headphones
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Tablets
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Watch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center text-white mb-0">
                                &copy; {new Date().getFullYear()} Powered By
                                Sougata
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
