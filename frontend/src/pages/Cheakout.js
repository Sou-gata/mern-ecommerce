import React, { useState } from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { states, districts } from "../features/statesAndDist";
import { removeSpace } from "../features/additionalFunctions";
import ProductInfoList from "../components/ProductInfoList";

const Cheakout = () => {
    const navigate = useNavigate();
    const [state, setState] = useState("selectState");
    const [dist, setDist] = useState("selectDist");
    const [distList, setDistList] = useState([]);
    const changeState = (e) => {
        setState(e.target.value);
        setDistList(districts[e.target.value]);
        setDist("selectDist");
    };
    const changeDist = (e) => {
        setDist(e.target.value);
    };
    return (
        <>
            <Meta title="Cheakout" />
            <div className="cheakout-wrapper py-3 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="cheakout-left-data">
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
                                        <li className="breadcrumb-item current">
                                            Information &nbsp;
                                            <MdKeyboardArrowRight />
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Shipping &nbsp;
                                            <MdKeyboardArrowRight />
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title">Contact information</h4>
                                <p className="user-details">
                                    Sougata Talukdar
                                    (sougatatalukdar77@gmail.com)
                                </p>
                                <form
                                    action=""
                                    className="d-flex flex-wrap gap-15 justify-content-between address-form"
                                >
                                    <div className="w-100">
                                        <select
                                            name=""
                                            id=""
                                            className="form-control form-select"
                                        >
                                            <option value="old">Use Old</option>
                                            <option value="new">
                                                New Address
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-100">
                                        <select
                                            name=""
                                            id=""
                                            className="form-control form-select"
                                            value={state}
                                            onChange={(e) => {
                                                changeState(e);
                                            }}
                                        >
                                            <option
                                                value="selectState"
                                                selected={true}
                                                disabled={true}
                                            >
                                                Select State
                                            </option>
                                            {states.map((item, i) => {
                                                return (
                                                    <option
                                                        value={removeSpace(
                                                            item
                                                        )}
                                                        key={i}
                                                    >
                                                        {item}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="name">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="name">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address Line 1"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address Line 2 (Optional)"
                                        />
                                    </div>
                                    <div className="name">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Post Office"
                                        />
                                    </div>
                                    <div className="name">
                                        <select
                                            name=""
                                            id=""
                                            className="form-control form-select"
                                            value={dist}
                                            onChange={(e) => {
                                                changeDist(e);
                                            }}
                                        >
                                            <option
                                                value="selectDist"
                                                selected={true}
                                                disabled={true}
                                            >
                                                Select Distirict
                                            </option>
                                            {distList.map((item, i) => {
                                                return (
                                                    <option
                                                        value={removeSpace(
                                                            item
                                                        )}
                                                        key={i}
                                                    >
                                                        {item}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="name">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Pin Code"
                                        />
                                    </div>
                                    <div className="name">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Contact Number"
                                        />
                                    </div>
                                </form>
                                <div className="w-100 continue-shipping">
                                    <div className="d-flex align-items-center">
                                        <Link to="/cart">
                                            <IoIosArrowBack className="me-2" />
                                            Return to cart
                                        </Link>
                                        <button
                                            className="button btn"
                                            onClick={() => {
                                                navigate("/shipping");
                                            }}
                                        >
                                            Continue to Shipping
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

export default Cheakout;
