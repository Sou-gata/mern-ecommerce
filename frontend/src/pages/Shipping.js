import React from "react";
import ProductInfoList from "../components/ProductInfoList";
import { Link, useNavigate } from "react-router-dom";
import Meta from "../components/Meta";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const Shipping = () => {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="Cheakout" />
            <div className="cheakout-wrapper py-3 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="shipping-left-data">
                                <h3 className="website-name">Sougata</h3>
                                <nav
                                    style={{ "--bs-breadcrumb-divider": ">" }}
                                    aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/cart">Cart &nbsp;</Link>
                                            <MdKeyboardArrowRight />
                                        </li>
                                        <li className="breadcrumb-item">
                                            Information &nbsp;
                                            <MdKeyboardArrowRight />
                                        </li>
                                        <li className="breadcrumb-item current">
                                            Shipping &nbsp;
                                            <MdKeyboardArrowRight />
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <div className="ship-info">
                                    <div>
                                        <div>
                                            <p>Contact</p>
                                        </div>
                                        <div>
                                            <p>7797454561</p>
                                        </div>
                                        <button>Change</button>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Ship to</p>
                                        </div>
                                        <div>
                                            <p>Out Colony, Gangarampur</p>
                                        </div>
                                        <button>Change</button>
                                    </div>
                                </div>
                                <h4>Shipping method</h4>
                                <div className="shipping-method">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="stabdard"
                                            id="stabdard"
                                            checked={true}
                                        />
                                        <label
                                            className="form-check-label"
                                            for="stabdard"
                                        >
                                            Standard
                                        </label>
                                    </div>
                                    <h5>₹ 998</h5>
                                </div>
                                <div className="w-100 continue-shipping">
                                    <div className="d-flex align-items-center">
                                        <Link to="/cart">
                                            <IoIosArrowBack className="me-2" />
                                            Return to cheakout
                                        </Link>
                                        <button
                                            className="button btn"
                                            onClick={() => {
                                                navigate("/payment");
                                            }}
                                        >
                                            Continue to Payment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProductInfoList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shipping;
