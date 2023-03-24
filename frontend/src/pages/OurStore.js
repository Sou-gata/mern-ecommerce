import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import StoreLeft from "../components/StoreLeft";
import StoreRight from "../components/StoreRight";
import Container from "../components/Container";

const OurStore = () => {
    return (
        <>
            <Meta title="Our Store" />
            <BradCrumb title="Our Store" />
            <Container class1e="store-wrapper py-3 home-wrapper-2">
                <div className="row">
                    <StoreLeft />
                    <StoreRight />
                </div>
            </Container>
        </>
    );
};

export default OurStore;
