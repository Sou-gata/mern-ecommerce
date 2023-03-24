import React from "react";
import BradCrumb from "../components/BradCrumb";
import CompareProductCard from "../components/CompareProductCard";
import Meta from "../components/Meta";
import Container from "../components/Container";

const CompareProduct = () => {
    return (
        <>
            <Meta title="Compare Products" />
            <BradCrumb title="Compare Products" />
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <CompareProductCard />
                    <CompareProductCard />
                    <CompareProductCard />
                    <CompareProductCard />
                </div>
            </Container>
        </>
    );
};

export default CompareProduct;
