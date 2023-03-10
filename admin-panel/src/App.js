import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import BlogCatList from "./pages/BlogCatList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";
import AddBlogCat from "./pages/AddBlogCat";
import AddColor from "./pages/AddColor";
import AddCategory from "./pages/AddCategory";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";
import NotFound from "./pages/NotFound";
import AddCoupon from "./pages/AddCoupon";
import CouponList from "./pages/CouponList";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/admin" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="enquiries" element={<Enquiries />} />
                    <Route
                        path="blog-category-list"
                        element={<BlogCatList />}
                    />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="list-blog" element={<Bloglist />} />
                    <Route path="list-color" element={<ColorList />} />
                    <Route path="list-category" element={<CategoryList />} />
                    <Route path="list-brand" element={<BrandList />} />
                    <Route path="list-product" element={<ProductList />} />
                    <Route path="list-coupon" element={<CouponList />} />
                    <Route path="blog" element={<AddBlog />} />
                    <Route path="blog-category" element={<AddBlogCat />} />
                    <Route path="color" element={<AddColor />} />
                    <Route path="category" element={<AddCategory />} />
                    <Route path="brand" element={<AddBrand />} />
                    <Route path="product" element={<AddProduct />} />
                    <Route path="coupon" element={<AddCoupon />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
