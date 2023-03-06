import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgetpassword from "./pages/Forgetpassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Cheakout from "./pages/Cheakout";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="store" element={<OurStore />} />
                        <Route path="product/:id" element={<SingleProduct />} />
                        <Route path="blogs" element={<Blog />} />
                        <Route path="blog/:id" element={<SingleBlog />} />
                        <Route path="wishlist" element={<Wishlist />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="cheakout" element={<Cheakout />} />
                        <Route path="shipping" element={<Shipping />} />
                        <Route path="payment" element={<Payment />} />
                        <Route
                            path="forget-password"
                            element={<Forgetpassword />}
                        />
                        <Route
                            path="reset-password"
                            element={<ResetPassword />}
                        />
                        <Route
                            path="compare-product"
                            element={<CompareProduct />}
                        />
                        <Route
                            path="privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="refund-policy"
                            element={<RefundPolicy />}
                        />
                        <Route
                            path="shipping-policy"
                            element={<ShippingPolicy />}
                        />
                        <Route
                            path="term-conditions"
                            element={<TermAndCondition />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
