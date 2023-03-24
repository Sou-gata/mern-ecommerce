import React from "react";

const CustomInputs = (props) => {
    const { className, type, label, id, name, value, onChange } = props;
    return (
        <div className="form-floating mb-4">
            <input
                type={type}
                className={className || "form-control"}
                id={id}
                placeholder={label}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default CustomInputs;
