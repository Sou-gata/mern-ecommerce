import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    return (
        <>
            <Meta title="Reset Password" />
            <BradCrumb title="Reset Password" />
            <div className="forgot-password-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center">
                                    Reset Your Password
                                </h3>
                                <p className="text-center">
                                    We will send you an email to reset your
                                    password
                                </p>
                                <form action="">
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="cpassword"
                                            placeholder="Confirm Password"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="npassword"
                                            placeholder="New Password"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center flex-column align-items-center gap-15">
                                        <button
                                            className="btn button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                        <Link
                                            className="forget-password"
                                            to="/login"
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
