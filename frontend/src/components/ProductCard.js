import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ item, grid }) => {
    let location = useLocation();

    return (
        <>
            <div
                className={`${
                    location.pathname === "/store" ? `gr-${grid}` : "col-2"
                }`}
            >
                <Link to="/product/id" className="product-card">
                    <div className="wishlist-icon">
                        <Link>
                            <img src="/images/wish.svg" alt="wish" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src={item?.src} alt="" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                            count={5}
                            size={20}
                            value={parseFloat(item?.star)}
                            isHalf={true}
                            edit={false}
                        />
                        {grid === 12 && (
                            <p className="description">{item?.description}</p>
                        )}
                        <p className="price">₹ {item?.price}</p>
                    </div>
                    <div className="action-bar">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img
                                    src="/images/prodcompare.svg"
                                    alt="compare"
                                />
                            </Link>
                            <Link>
                                <img src="/images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="/images/add-cart.svg" alt="cart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
