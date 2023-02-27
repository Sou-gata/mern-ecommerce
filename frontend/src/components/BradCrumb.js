import React from "react";
import { Link } from "react-router-dom";

const BradCrumb = (props) => {
    const { title } = props;
    return (
        <div className="bradcrumb mb-0 py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center m-0">
                            <Link className="text-dark" to="/">
                                Home
                            </Link>
                            &nbsp;&nbsp;/ {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BradCrumb;
