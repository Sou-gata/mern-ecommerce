import React from "react";
import CustomInput from "../components/CustomInputs";

const AddCategory = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Category</h3>
            <form action="">
                <CustomInput type="text" label="Enter Category" />
                <button
                    type="text"
                    className="btn button"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Add Category
                </button>
            </form>
        </div>
    );
};

export default AddCategory;
