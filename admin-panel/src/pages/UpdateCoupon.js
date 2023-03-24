import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCoupon, updateCoupon } from "../features/coupon/couponSlice";
import CustomInput from "../components/CustomInputs";
import { toast } from "react-toastify";

const UpdateCoupon = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let id = location.pathname.split("/")[3];
    const [coupon, setCoupon] = useState({
        name: "",
        expiry: "",
        discount: "",
        maxDiscount: "",
        discountAbove: "",
    });

    useEffect(() => {
        const data = async () => {
            const a = await dispatch(getCoupon(id));
            let couponDetails = a.payload;
            var now = new Date(couponDetails.expiry);
            now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
            now = now.toISOString().slice(0, 16);
            setCoupon({
                name: couponDetails.name,
                expiry: now,
                discount: couponDetails.discount,
                maxDiscount: couponDetails.maxDiscount,
                discountAbove: couponDetails.discountAbove,
            });
        };
        data();
    }, [dispatch]);
    const handleChange = (e, name) => {
        setCoupon({ ...coupon, [name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let a = await dispatch(updateCoupon({ id, data: coupon }));
        if (a.meta.requestStatus === "fulfilled") {
            toast.success("Category added successfully");
            navigate("/admin/list-coupon");
        } else {
            toast.error("Something went wrong");
        }
    };
    return (
        <>
            <div className="add-coupon-wrapper">
                <h3 className="title mb-4">Update Coupon</h3>
                <form
                    action=""
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <CustomInput
                        type="text"
                        label="Update coupon code"
                        name="name"
                        onChange={(e) => {
                            handleChange(e, "name");
                        }}
                        value={coupon.name}
                    />
                    <div className="flex-between">
                        <CustomInput
                            type="datetime-local"
                            label="Expairy date"
                            name="expiry"
                            onChange={(e) => {
                                handleChange(e, "expiry");
                            }}
                            value={coupon.expiry}
                        />
                        <CustomInput
                            type="number"
                            label="Discount percent"
                            name="discount"
                            onChange={(e) => {
                                handleChange(e, "discount");
                            }}
                            value={coupon.discount}
                        />
                    </div>
                    <div className="flex-between">
                        <CustomInput
                            type="number"
                            label="Maximum discount"
                            name="maxDiscount"
                            onChange={(e) => {
                                handleChange(e, "maxDiscount");
                            }}
                            value={coupon.maxDiscount}
                        />
                        <CustomInput
                            type="number"
                            label="Discount Above Perchase"
                            name="discountAbove"
                            onChange={(e) => {
                                handleChange(e, "discountAbove");
                            }}
                            value={coupon.discountAbove}
                        />
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                        <button type="submit" className="btn button">
                            Update Coupon
                        </button>
                        <button
                            className="button btn ms-4"
                            onClick={() => {
                                navigate("/admin/list-coupon");
                            }}
                        >
                            Cancle
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateCoupon;
