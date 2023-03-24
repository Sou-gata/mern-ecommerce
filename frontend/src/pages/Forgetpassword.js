import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Forgetpassword = () => {
    return (
        <>
            <Meta title="Forget Password" />
            <BradCrumb title="Forget Password" />
            <Container class1="forgot-password-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Reset Your Password</h3>
                            <p className="text-center">
                                We will send you an email to reset your password
                            </p>
                            <form action="">
                                <CustomInput
                                    type="email"
                                    name="eamail"
                                    placeholder="Email"
                                    className="form-control"
                                />
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
            </Container>
        </>
    );
};

export default Forgetpassword;
