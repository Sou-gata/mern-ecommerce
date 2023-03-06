import React from "react";

const ProductInfoList = () => {
    return (
        <>
            <div className="col-5 px-4">
                <div className="border-bottom">
                    <div className="py-3">
                        <div className="info-product">
                            <div className="info-image-container">
                                <img src="/images/f-mobile.png" alt="product" />
                                <div className="info-quantity">
                                    <p>2</p>
                                </div>
                            </div>
                            <div className="info-about">
                                <p>
                                    Samsung Galaxy S20 FE 5G (Cloud Lavender,
                                    8GB RAM, 128GB Storage)
                                </p>
                            </div>
                            <div className="info-price">
                                <h5>₹ 69,000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="py-3">
                        <div className="info-product">
                            <div className="info-image-container">
                                <img src="/images/f-mobile.png" alt="product" />
                                <div className="info-quantity">
                                    <p>2</p>
                                </div>
                            </div>
                            <div className="info-about">
                                <p>
                                    Samsung Galaxy S20 FE 5G (Cloud Lavender,
                                    8GB RAM, 128GB Storage)
                                </p>
                            </div>
                            <div className="info-price">
                                <h5>₹ 69,000</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-bottom shipping-subtotal py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Subtotal</p>
                        <p>₹ 69,000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Shipping</p>
                        <p>₹ 998</p>
                    </div>
                </div>
                <div className="info-total py-3 d-flex justify-content-between align-items-center">
                    <h4>Total</h4>
                    <h5>₹ 69,998</h5>
                </div>
            </div>
        </>
    );
};

export default ProductInfoList;
