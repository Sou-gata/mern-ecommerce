import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import StoreLeft from "../components/StoreLeft";
import StoreRight from "../components/StoreRight";

const OurStore = () => {
    return (
        <>
            <Meta title="Our Store" />
            <BradCrumb title="Our Store" />
            <div className="store-wrapper py-3 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <StoreLeft />
                        <StoreRight />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;
