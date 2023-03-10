import React from "react";
import CustomInput from "../components/CustomInputs";

const AddColor = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Colour</h3>
            <form action="">
                <CustomInput type="color" label="Enter Colour" />
                <button
                    type="submit"
                    className="btn button"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Add Colour
                </button>
            </form>
        </div>
    );
};

export default AddColor;
