import React, { useState } from "react";
import Meta from "../components/Meta";
import ProductInfoList from "../components/ProductInfoList";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { RiArrowDownSLine } from "react-icons/ri";
import {
    BsFillCreditCard2BackFill,
    BsCreditCard2Back,
    BsCashCoin,
} from "react-icons/bs";
import Container from "../components/Container";

const Payment = () => {
    const [expanded, setExpanded] = useState("");
    const handleChange = (panel) => {
        let temp = panel;
        if (expanded === temp) {
            temp = "";
        }
        setExpanded(temp);
    };

    return (
        <>
            <Meta title="Payment" />
            <Container class1="cheakout-wrapper py-3 home-wrapper-2">
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
                                    <li className="breadcrumb-item">
                                        Shipping &nbsp;
                                        <MdKeyboardArrowRight />
                                    </li>
                                    <li className="breadcrumb-item current">
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
                                <div>
                                    <div>
                                        <p>Method</p>
                                    </div>
                                    <div>
                                        <p>Standard</p>
                                    </div>
                                    <button>
                                        <b>₹ 998</b>
                                    </button>
                                </div>
                            </div>
                            <div className="pay-title">
                                <h5>Payment Methods</h5>
                                <p>
                                    All trsnsactions are secured and encrypted.
                                </p>
                            </div>
                            <div className="payment-method">
                                <Accordion
                                    expanded={expanded === "panel1"}
                                    onChange={() => handleChange("panel1")}
                                    className="accordion"
                                >
                                    <AccordionSummary
                                        expandIcon={<RiArrowDownSLine />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <h3 className="product-heading ">
                                            <BsFillCreditCard2BackFill className="me-2 asColor" />
                                            Creadit Card
                                        </h3>
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-accordion">
                                        <div className="card-info">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Card number"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Card holder name"
                                            />
                                            <div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Expairation date (MM / YY)"
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Security code"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion
                                    expanded={expanded === "panel2"}
                                    onChange={() => handleChange("panel2")}
                                    className="accordion"
                                >
                                    <AccordionSummary
                                        expandIcon={<RiArrowDownSLine />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <h3 className="product-heading ">
                                            <BsCreditCard2Back className="me-2 asColor" />
                                            Debit Card
                                        </h3>
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-accordion">
                                        <div className="card-info">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Card number"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Card holder name"
                                            />
                                            <div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Expairation date (MM / YY)"
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Security code"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion
                                    expanded={expanded === "panel3"}
                                    onChange={() => handleChange("panel3")}
                                    className="accordion"
                                >
                                    <AccordionSummary
                                        expandIcon={<RiArrowDownSLine />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <img src="/images/upi.svg" alt="upi" />
                                        <h3 className="product-heading ">
                                            UPI
                                        </h3>
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-accordion">
                                        <p className="product-data">
                                            UI will be added later
                                        </p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion
                                    expanded={expanded === "panel4"}
                                    onChange={() => handleChange("panel4")}
                                    className="accordion"
                                >
                                    <AccordionSummary
                                        expandIcon={<RiArrowDownSLine />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <BsCashCoin className="me-2 asColor" />
                                        <h3 className="product-heading ">
                                            Cash On Delivery
                                        </h3>
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-accordion">
                                        <p className="product-data">
                                            UI will be added later
                                        </p>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                        <div className="w-100 continue-shipping">
                            <div className="d-flex align-items-center">
                                <Link to="/cart">
                                    <IoIosArrowBack className="me-2" />
                                    Return to cart
                                </Link>
                                <button className="button btn">Pay now</button>
                            </div>
                        </div>
                    </div>
                    <ProductInfoList />
                </div>
            </Container>
        </>
    );
};

export default Payment;
