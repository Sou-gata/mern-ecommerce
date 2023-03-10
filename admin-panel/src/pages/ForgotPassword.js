import React from "react";
import { Link } from "react-router-dom";
import CustomInputs from "../components/CustomInputs";

const ForgotPassword = () => {
    return (
        <div className="login-container py-3">
            <div className="my-3 p-3">
                <h4 className="title">Forgot Password</h4>
                <p>Please entar your ragisterde email</p>
                <form action="">
                    <CustomInputs
                        type="email"
                        id="email"
                        label="Email Address"
                    />
                    <Link to="/">Remember Password?</Link>
                    <button
                        onClick={(e) => e.preventDefault()}
                        type="submit"
                        className="px-3 py-2 btn"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
