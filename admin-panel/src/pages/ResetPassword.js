import React from "react";
import CustomInputs from "../components/CustomInputs";

const ResetPassword = () => {
    return (
        <div className="login-container py-3">
            <div className="my-3 p-3">
                <h4 className="title">Reset Password</h4>
                <p>Please enter your password</p>
                <form action="">
                    <CustomInputs type="password" id="pass" label="Password" />
                    <CustomInputs
                        type="password"
                        id="cPass"
                        label="Confirm Password"
                    />
                    <button
                        onClick={(e) => e.preventDefault()}
                        type="submit"
                        className="px-3 py-2 btn"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
