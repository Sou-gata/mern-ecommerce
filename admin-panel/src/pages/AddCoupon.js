import React from "react";
import CustomInput from "../components/CustomInputs";

const AddCoupon = () => {
    return (
        <div className="add-coupon-wrapper">
            <h3 className="title mb-4">Add Coupon</h3>
            <form action="">
                <CustomInput type="text" label="Add coupon code" />
                <div className="flex-between">
                    <CustomInput type="datetime-local" label="Expairy date" />
                    <CustomInput type="number" label="Discount percent" />
                </div>
                <div className="flex-between">
                    <CustomInput type="number" label="Maximum discount" />
                    <CustomInput
                        type="number"
                        label="Discount Above Perchase"
                    />
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button
                        type="submit"
                        className="btn button"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        Add Coupon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCoupon;
