import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { addCommaToPrice } from "../features/additionalFunctions";

const CartProduct = ({ product }) => {
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const totalPriceCalc = () => {
        let price = parseFloat(product.price);
        let total = parseInt(count) * price;
        total = addCommaToPrice(total);
        setTotalPrice(total);
        console.log(total);
    };
    useEffect(() => {
        totalPriceCalc();
    }, [count]);
    return (
        <>
            <div className="d-flex align-items-center justify-content-between cart-data py-0">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                    <div>
                        <img src="/images/f-mobile.png" alt="product" />
                    </div>
                    <div>
                        <h5 className="title">{product.title}</h5>
                        <p className="color">Color : {product.color}</p>
                        <p className="size">Size : {product.size}</p>
                    </div>
                </div>
                <div className="cart-col-2">
                    <h5 className="price">
                        ₹ {addCommaToPrice(product.price)}
                    </h5>
                </div>
                <div className="cart-col-3">
                    <div className="quantity">
                        <button
                            onClick={() => {
                                let temp = count - 1;
                                temp = Math.max(1, temp);
                                setCount(temp);
                            }}
                        >
                            -
                        </button>
                        <p>{count}</p>
                        <button
                            onClick={() => {
                                let temp = count + 1;
                                temp = Math.min(temp, 10);
                                setCount(temp);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <div>
                        <BsTrashFill className="trash-icon" />
                    </div>
                </div>
                <div className="cart-col-4">
                    <h5>₹ {totalPrice}</h5>
                </div>
            </div>
        </>
    );
};

export default CartProduct;
