import React from "react";
import CustomInput from "../components/CustomInputs";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { object, string } from "yup";
import { createBrand } from "../features/brand/brandSlice";

const AddBrand = () => {
    const dispatch = useDispatch();

    let schema = object({
        title: string().required("Brand name is required"),
    });
    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            let a = await dispatch(createBrand(values));
            if (a.meta.requestStatus === "fulfilled") {
                toast.success("Brand added successfully");
                formik.values.title = "";
            } else {
                toast.error("Something went wrong");
            }
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Brand</h3>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput
                    type="text"
                    label="Enter Brand Name"
                    name="title"
                    onChange={formik.handleChange("title")}
                    value={formik.values.title}
                />
                <button type="submit" className="btn button">
                    Add Brand
                </button>
            </form>
        </div>
    );
};

export default AddBrand;
