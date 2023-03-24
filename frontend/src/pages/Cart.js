import React from "react";
import BradCrumb from "../components/BradCrumb";
import CartProduct from "../components/CartProduct";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const demoData = [
    {
        title: "Samsung Galaxy S20 FE 5G (Cloud Lavender, 8GB RAM, 128GB Storage)",
        color: "#f9dcf8",
        img: "/images/f-mobile.png",
        size: "S",
        price: "34999",
    },
];

const Cart = () => {
    return (
        <>
            <Meta title="Cart" />
            <BradCrumb title="Cart" />
            <Container class1="cart-wrapper homw-wrapper-2 py-3">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between cart-headder">
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Qiantity</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div>
                        <CartProduct product={demoData[0]} />
                        <CartProduct product={demoData[0]} />
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="px-3 d-flex justify-content-between align-items-center">
                            <Link to="/store" className="button">
                                Continue to Shopping
                            </Link>
                            <div className="d-flex flex-column align-items-end subtotal">
                                <h4>Subtotal : ₹69,998</h4>
                                <p>
                                    Taxes and shipping will calculate at
                                    cheakout page
                                </p>
                                <Link className="button" to="/cheakout">
                                    Cheakout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
