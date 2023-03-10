import React from "react";

const CustomInputs = (props) => {
    const { className, type, label, id } = props;
    return (
        <div className="form-floating mb-4">
            <input
                type={type}
                className={className || "form-control"}
                id={id}
                placeholder={label}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default CustomInputs;
