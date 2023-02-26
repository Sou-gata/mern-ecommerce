import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
    return (
        <>
            <div className="col-4 mb-3">
                <div className="special-product-card">
                    <div className="d-flex justify-content-between">
                        <div>
                            <img
                                className="img-fluid"
                                src="images/watch.jpg"
                                alt="prod"
                            />
                        </div>
                        <div className="speacial-product-content">
                            <h5 className="brand">Sony</h5>
                            <h6 className="title">
                                Samsung Galaxy Note10+ Mobile Phone; Sim...
                            </h6>
                            <ReactStars
                                count={5}
                                size={20}
                                value={parseFloat("4.5")}
                                isHalf={true}
                                edit={false}
                            />
                            <p className="price">
                                <span className="red-p">$100</span> &nbsp;
                                <strike>$200</strike>
                            </p>
                            <div className="discount-till d-flex align-items-center">
                                <p>
                                    <b>5 </b> days
                                </p>
                                <div className="d-flex gap-10 align-items-center">
                                    <span className="coundown-batch">07</span>:
                                    <span className="coundown-batch">17</span>:
                                    <span className="coundown-batch ">21</span>
                                </div>
                            </div>
                            <div className="prod-count">
                                <p className="my-2">Products : 5</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "25%" }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <Link className="button mt-3">Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecialProduct;
