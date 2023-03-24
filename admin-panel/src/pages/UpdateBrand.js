import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomInput from "../components/CustomInputs";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { object, string } from "yup";
import { getBrand, updateBrand } from "../features/brand/brandSlice";
const UpdateBrand = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation();
    let id = location.pathname.split("/")[3];

    const newBrand = useSelector((state) => state.brands);
    useEffect(() => {
        dispatch(getBrand(id));
    }, [id, dispatch]);
    let schema = object({
        title: string().required("Brand name is required"),
    });
    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            let a = await dispatch(updateBrand({ id, data: values }));
            if (a.meta.requestStatus === "fulfilled") {
                toast.success("Brand updated successfully");
                navigate("/admin/list-brand/");
            } else {
                toast.error("Something went wrong");
            }
        },
    });
    const [title, setTitle] = useState("");
    const handleChange = (e, name) => {
        setTitle(e.target.value);
        formik.values[name] = e.target.value;
    };
    useEffect(() => {
        setTitle(newBrand.brandTitle.title);
    }, [newBrand.brandTitle.title]);
    return (
        <div>
            <h3 className="mb-4 title">Update Brand Name</h3>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput
                    type="text"
                    label="Enter New Brand Name"
                    name="title"
                    onChange={(e) => handleChange(e, "title")}
                    value={title}
                />
                <button type="submit" className="btn button">
                    Update Brand
                </button>
                <button
                    className="btn button ms-3"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/admin/list-brand/");
                    }}
                >
                    Cancle
                </button>
            </form>
        </div>
    );
};

export default UpdateBrand;
