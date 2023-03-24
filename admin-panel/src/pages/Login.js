import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInputs from "../components/CustomInputs";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { base_url } from "../utils/base_url";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let schema = object({
        email: string()
            .email("Email should be valid")
            .required("Email is rquired"),
        password: string().required("Password is required"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            let a = await dispatch(login(values));
            a = a.payload;
            if (a.success) {
                navigate("/admin");
            } else {
                toast.error("You are not authorised");
            }
        },
    });
    useEffect(() => {
        const getData = async () => {
            let token;
            let user = localStorage.getItem("user");
            if (user) {
                user = JSON.parse(user);
                token = user.token;
            }
            if (token) {
                const data = await axios.post(`${base_url}user/verify-login`, {
                    token,
                });
                if (data?.data?.success) {
                    navigate("/admin");
                }
            }
        };
        getData();
    }, [navigate]);
    return (
        <>
            <div className="login-container py-3">
                <div className="my-3 p-3">
                    <h4 className="title">Sign In</h4>
                    <p>Login to your account to continue</p>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <CustomInputs
                            name="email"
                            type="email"
                            id="email"
                            label="Email Address"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                        />
                        <div className="error">
                            {formik.touched.email && formik.errors.email ? (
                                <p>{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <CustomInputs
                            name="password"
                            type="password"
                            id="pass"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                        />
                        <div className="error">
                            {formik.touched.password &&
                            formik.errors.password ? (
                                <p>{formik.errors.password}</p>
                            ) : null}
                        </div>
                        <Link to="/forgot-password">Forgot Password?</Link>
                        <button type="submit" className="px-3 py-2 btn">
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
            />
        </>
    );
};

export default Login;
