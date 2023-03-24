import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import bCategoryReducer from "../features/bCategory/bCategorySlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import couponReducer from "../features/coupon/couponSlice";
import uploadReducer from "../features/upload/uploadSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        products: productReducer,
        brands: brandReducer,
        pCategory: pCategoryReducer,
        bcategories: bCategoryReducer,
        enquiries: enquiryReducer,
        coupons: couponReducer,
        upload: uploadReducer,
    },
});
