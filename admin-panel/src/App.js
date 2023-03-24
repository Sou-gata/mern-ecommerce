import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddCategory from "./pages/AddCategory";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";
import NotFound from "./pages/NotFound";
import AddCoupon from "./pages/AddCoupon";
import CouponList from "./pages/CouponList";
import ViewSingleOrder from "./pages/ViewSingleOrder";
import UpdateBrand from "./pages/UpdateBrand";
import UpdateCategory from "./pages/UpdateCategory";
import UpdateOrder from "./pages/UpdateOrder";
import UpdateCoupon from "./pages/UpdateCoupon";
import UpdateProduct from "./pages/UpdateProduct";
import ViewSingleProduct from "./pages/ViewSingleProduct";
import ViewFullEnquiry from "./pages/ViewFullEnquiry";

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
                    <Route path="enquiry/:id" element={<ViewFullEnquiry />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="orders/:id" element={<ViewSingleOrder />} />
                    <Route path="order/:id" element={<UpdateOrder />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="list-category" element={<CategoryList />} />
                    <Route path="list-brand" element={<BrandList />} />
                    <Route path="list-product" element={<ProductList />} />
                    <Route
                        path="view-product/:id"
                        element={<ViewSingleProduct />}
                    />
                    <Route path="product/:id" element={<UpdateProduct />} />
                    <Route path="list-coupon" element={<CouponList />} />
                    <Route path="coupon/:id" element={<UpdateCoupon />} />
                    <Route path="category" element={<AddCategory />} />
                    <Route
                        path="/admin/category/:id"
                        element={<UpdateCategory />}
                    />
                    <Route path="brand" element={<AddBrand />} />
                    <Route path="/admin/brand/:id" element={<UpdateBrand />} />
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
