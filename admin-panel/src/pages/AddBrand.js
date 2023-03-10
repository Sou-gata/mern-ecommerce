import React from "react";
import CustomInput from "../components/CustomInputs";

const AddBrand = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Brand</h3>
            <form action="">
                <CustomInput type="text" label="Enter Brand Name" />
                <button
                    type="text"
                    className="btn button"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Add Brand
                </button>
            </form>
        </div>
    );
};

export default AddBrand;
