import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";
import Container from "../components/Container";

const Signup = () => {
    return (
        <>
            <Meta title="Sign Up" />
            <BradCrumb title="Sign Up" />
            <Container class1="signup-wrapper home-wrapper-2 py-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Create Account</h3>
                            <form action="">
                                <CustomInput
                                    type="text"
                                    name="f-name"
                                    placeholder="First name"
                                    className="form-control"
                                />
                                <CustomInput
                                    type="text"
                                    name="l-name"
                                    placeholder="Last name"
                                    className="form-control"
                                />
                                <CustomInput
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                    className="form-control"
                                />
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <CustomInput
                                    type="password"
                                    name="c-password"
                                    placeholder="Confirm password"
                                    className="form-control"
                                />
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
            </Container>
        </>
    );
};

export default Signup;
