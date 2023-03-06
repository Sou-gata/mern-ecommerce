import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
    return (
        <>
            <Meta title="Wishlist" />
            <BradCrumb title="Wishlist" />
            <div className="wishlist-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                        <WishlistCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
