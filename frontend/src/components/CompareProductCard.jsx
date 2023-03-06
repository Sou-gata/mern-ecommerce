import React from "react";
import Color from "../components/Color";

const CompareProductCard = () => {
    return (
        <>
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img
                        src="/images/cross.svg"
                        alt="cross"
                        className="cross"
                    />
                    <div className="product-card-image">
                        <img src="/images/f-watch.png" alt="watch" />
                    </div>
                    <div className="compare-product-details">
                        <h5 className="title">
                            Fire-Boltt Ninja Call Pro Plus 1.83, 240*280 Pixel
                        </h5>
                        <h6 className="price mb-2">₹ 1,799</h6>
                        <div>
                            <div className="product-details">
                                <h5>Brand:</h5>
                                <p className="mb-0">Fire-Boltt</p>
                            </div>
                        </div>
                        <div>
                            <div className="product-details">
                                <h5>Type:</h5>
                                <p className="mb-0">Smart Watch</p>
                            </div>
                        </div>
                        <div>
                            <div className="product-details">
                                <h5>SKU:</h5>
                                <p className="mb-0">SKU033</p>
                            </div>
                        </div>
                        <div>
                            <div className="product-details">
                                <h5>Availability:</h5>
                                <p className="mb-0">In Stock</p>
                            </div>
                        </div>
                        <div>
                            <div className="product-details">
                                <h5>Colour:</h5>
                                <div className="colors">
                                    <Color count={3} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-details">
                                <h5>Size:</h5>
                                <p className="mb-0">S M L</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareProductCard;
