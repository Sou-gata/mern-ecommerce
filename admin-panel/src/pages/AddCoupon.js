import React from "react";
import CustomInput from "../components/CustomInputs";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { object, string, number, date } from "yup";
import { createCoupon } from "../features/coupon/couponSlice";

const AddCoupon = () => {
    const dispatch = useDispatch();
    let schema = object({
        name: string().required("Coupon name is required"),
        discount: number().required("Discount percent is required"),
        maxDiscount: number(),
        discountAbove: number(),
        expiry: date().required("Expairy date is required"),
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            expiry: "",
            discount: "",
            maxDiscount: "",
            discountAbove: "",
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            let a = await dispatch(createCoupon(values));
            if (a.meta.requestStatus === "fulfilled") {
                toast.success("Coupon added successfully");
                formik.values.name = "";
                formik.values.expiry = "";
                formik.values.discount = "";
                formik.values.maxDiscount = "";
                formik.values.discountAbove = "";
            } else {
                toast.error("Something went wrong");
            }
        },
    });
    return (
        <div className="add-coupon-wrapper">
            <h3 className="title mb-4">Add Coupon</h3>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput
                    type="text"
                    label="Add coupon code"
                    name="name"
                    onChange={formik.handleChange("name")}
                    value={formik.values.name}
                />
                <div className="flex-between">
                    <CustomInput
                        type="datetime-local"
                        label="Expairy date"
                        name="expiry"
                        onChange={formik.handleChange("expiry")}
                        value={formik.values.expiry}
                    />
                    <CustomInput
                        type="number"
                        label="Discount percent"
                        name="discount"
                        onChange={formik.handleChange("discount")}
                        value={formik.values.discount}
                    />
                </div>
                <div className="flex-between">
                    <CustomInput
                        type="number"
                        label="Maximum discount"
                        name="maxDiscount"
                        onChange={formik.handleChange("maxDiscount")}
                        value={formik.values.maxDiscount}
                    />
                    <CustomInput
                        type="number"
                        label="Discount Above Perchase"
                        name="discountAbove"
                        onChange={formik.handleChange("discountAbove")}
                        value={formik.values.discountAbove}
                    />
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="btn button">
                        Add Coupon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCoupon;
