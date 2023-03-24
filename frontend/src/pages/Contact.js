import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Contact = () => {
    return (
        <>
            <Meta title="Contact Us" />
            <BradCrumb title="Contact Us" />
            <Container class1="contact-wrapper py-2 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3604.1967557549337!2d88.5137112099718!3d25.3982236956587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb47c2661fd849%3A0x2749160a4fe92e0a!2sCOMPUTER%20WORLD%20INDIA!5e0!3m2!1sen!2sin!4v1677493041302!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            className="border-0 w-100"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h3 className="contact-title">Contact Us</h3>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-15"
                                >
                                    <CustomInput
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                    <CustomInput
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                    <CustomInput
                                        type="tel"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                    />
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="4"
                                            placeholder="Comments"
                                            className="w-100 form-control"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            className="button btn"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title">
                                    Get In Touch With Us
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>
                                            <FaHome className="fs-5" />
                                            <address>
                                                Computer World India, Bara
                                                Bazar, Gangarampur,Dakshin
                                                Dinajpur, <br />
                                                West Bengal, Pin - 733124
                                            </address>
                                        </li>
                                        <li>
                                            <FaPhoneAlt className="fs-5" />
                                            <a href="tel:+917797454561">
                                                +917797454561
                                            </a>
                                            &
                                            <a href="tel:+917440024006">
                                                +917440024006
                                            </a>
                                        </li>
                                        <li>
                                            <MdEmail className="fs-5" />
                                            <a href="mailto:sougatatalukdar77@gmail.com">
                                                sougatatalukdar77@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <BsInfoCircleFill className="fs-5" />
                                            <p className="mb-0">
                                                Monday - Friday, 10AM - 8PM
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
