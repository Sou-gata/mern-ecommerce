import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomInput from "../components/CustomInputs";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { object, string } from "yup";
import {
    updatCategory,
    getCategory,
} from "../features/pcategory/pcategorySlice";

const UpdateCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation();
    let id = location.pathname.split("/")[3];

    const newCategory = useSelector((state) => state.pCategory);
    useEffect(() => {
        dispatch(getCategory(id));
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
            let a = await dispatch(updatCategory({ id, data: values }));
            if (a.meta.requestStatus === "fulfilled") {
                toast.success("Category updated successfully");
                navigate("/admin/list-category/");
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
        console.log(newCategory);
        setTitle(newCategory?.categoryTitle?.title);
    }, [newCategory?.categoryTitle?.title]);
    return (
        <div>
            <h3 className="mb-4 title">Update Category Name</h3>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput
                    type="text"
                    label="Enter New Category Name"
                    name="title"
                    onChange={(e) => handleChange(e, "title")}
                    value={title}
                />
                <button type="submit" className="btn button">
                    Update Category
                </button>
                <button
                    className="btn button ms-3"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/admin/list-category/");
                    }}
                >
                    Cancle
                </button>
            </form>
        </div>
    );
};

export default UpdateCategory;
