import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";

const Signup = () => {
    return (
        <>
            <Meta title="Sign Up" />
            <BradCrumb title="Sign Up" />
            <div className="signup-wrapper home-wrapper-2 py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center">Create Account</h3>
                                <form action="">
                                    <div>
                                        <input
                                            type="text"
                                            name="f-name"
                                            placeholder="First name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="l-name"
                                            placeholder="Last name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="Email"
                                            placeholder="Email"
                                            className="form-control"
                                        />
                                    </div>
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
                                            name="c-password"
                                            placeholder="Confirm password"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mt-4 d-flex justify-content-center gap-15 align-items-center">
                                        <button
                                            className="btn button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Create
                                        </button>
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

export default Signup;
