import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInputs from "../components/CustomInputs";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login-container py-3">
            <div className="my-3 p-3">
                <h4 className="title">Sign In</h4>
                <p>Login to your account to continue</p>
                <form action="">
                    <CustomInputs
                        type="email"
                        id="email"
                        label="Email Address"
                    />
                    <CustomInputs type="password" id="pass" label="Password" />
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/admin");
                        }}
                        type="submit"
                        className="px-3 py-2 btn"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
