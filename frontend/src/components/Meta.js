import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title }) => {
    return (
        <>
            <Helmet>
                <title>E Commerse App | {title}</title>
            </Helmet>
        </>
    );
};

export default Meta;
