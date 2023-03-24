import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import WishlistCard from "../components/WishlistCard";
import Container from "../components/Container";

const Wishlist = () => {
    return (
        <>
            <Meta title="Wishlist" />
            <BradCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper py-5 home-wrapper-2">
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
            </Container>
        </>
    );
};

export default Wishlist;
