import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Meta title="Login" />
            <BradCrumb title="Login" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center">Login</h3>
                                <form action="">
                                    <div>
                                        <input
                                            type="email"
                                            name="eamail"
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
                                        <Link
                                            className="forget-password"
                                            to="/forget-password"
                                        >
                                            Forgot Password ?
                                        </Link>
                                        <div className="mt-4 d-flex justify-content-center gap-15 align-items-center">
                                            <button
                                                className="btn button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Login
                                            </button>
                                            <Link
                                                to="/signup"
                                                className="button signup"
                                            >
                                                Signup
                                            </Link>
                                        </div>
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

export default Login;
