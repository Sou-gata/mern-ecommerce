import React from "react";
import CustomInput from "../components/CustomInputs";

const AddBlogCat = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Blog Category</h3>
            <form action="">
                <CustomInput type="text" label="Enter Blog Category" />
                <button
                    type="submit"
                    className="btn button"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Add Blog Category
                </button>
            </form>
        </div>
    );
};

export default AddBlogCat;
