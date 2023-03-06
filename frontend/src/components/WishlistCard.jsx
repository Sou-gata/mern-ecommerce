import React from "react";

const WishlistCard = () => {
    return (
        <>
            <div className="col-3 mb-3">
                <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="cross" />
                    <div className="wishlist-card-image">
                        <img src="images/watch-2.jpg" alt="watch" />
                    </div>
                    <div className="px-3 py-2">
                        <h5 className="title">
                            Fire-Boltt Ninja Call Pro Plus 1.83, 240*280 Pixel
                        </h5>
                        <h6 className="price">₹ 1,799</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishlistCard;
