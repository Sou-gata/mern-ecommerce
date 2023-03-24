import React, { useEffect } from "react";
import CustomInputs from "../components/CustomInputs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getCategories } from "../features/pcategory/pcategorySlice";
import Dropzone from "react-dropzone";
import { ImUpload } from "react-icons/im";
import {
    deleteImg,
    uploadImg,
    resetImages,
} from "../features/upload/uploadSlice";
import { IoClose } from "react-icons/io5";
import { createProduct, resetProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";

const AddProduct = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
    }, [dispatch]);

    const brandState = useSelector((state) => state.brands.brands);
    const categoryState = useSelector((state) => state.pCategory.pCategories);
    const imagesState = useSelector((state) => state.upload.images);
    const newProduct = useSelector((state) => state.products);
    const successState = newProduct?.createProduct?.success;
    const { isSuccess, isError, isLoading } = newProduct;
    useEffect(() => {
        if (isSuccess && successState) {
            toast.success("Product added successfully");
        }
        if (isError) {
            toast.error("Something is wrong");
        }
    }, [isSuccess, isError, isLoading, successState]);
    let schema = object({
        title: string().required("Title is required"),
        description: string().required("Description is required"),
        price: number().required("Price is required"),
        quantity: number().required("Quantity is required"),
        brand: string().required("Brand is required"),
        category: string().required("Category is required"),
        tags: string().required("Tag is required"),
    });
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            quantity: "",
            brand: "default",
            category: "default",
            tags: "default",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(createProduct(values));
        },
    });
    let imgs = [];
    imagesState.forEach((i) => {
        imgs.push({
            url: i.url,
            public_id: i.public_id,
        });
    });
    formik.values.images = imgs;
    return (
        <div className="add-product-wrapper">
            <h3 className="mb-4 title">Add Product</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="flex-between">
                        <CustomInputs
                            type="text"
                            label="Enter Product Title"
                            name="title"
                            onChange={formik.handleChange("title")}
                            value={formik.values.title}
                        />
                        <CustomInputs
                            type="number"
                            label="Enter Product Price"
                            name="price"
                            onChange={formik.handleChange("price")}
                            value={formik.values.price}
                        />
                    </div>
                    <div className="flex-between">
                        <select
                            name=""
                            id=""
                            className="form-select mb-4"
                            onChange={formik.handleChange("category")}
                            value={formik.values.category}
                        >
                            <option value="default" disabled>
                                Selet Category
                            </option>
                            {categoryState.map((item) => {
                                return (
                                    <option key={item._id} value={item.title}>
                                        {item.title}
                                    </option>
                                );
                            })}
                        </select>
                        <select
                            name=""
                            id=""
                            className="form-select mb-4"
                            onChange={formik.handleChange("brand")}
                            value={formik.values.brand}
                        >
                            <option value="default" disabled>
                                Selet Brand
                            </option>
                            {brandState.map((item) => {
                                return (
                                    <option key={item._id} value={item.title}>
                                        {item.title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex-between">
                        <select
                            name="tags"
                            id=""
                            className="form-select mb-4"
                            onChange={formik.handleChange("tags")}
                            value={formik.values.tags}
                        >
                            <option value="default" disabled>
                                Selet Tags
                            </option>
                            <option value="featured">Featured </option>
                            <option value="special">Special</option>
                            <option value="popular">Popular</option>
                        </select>
                        <CustomInputs
                            type="number"
                            label="Enter Product Quantity"
                            name="quantity"
                            onChange={formik.handleChange("quantity")}
                            value={formik.values.quantity}
                        />
                    </div>
                    <div className="mb-4">
                        <h6>Description</h6>
                        <ReactQuill
                            theme="snow"
                            className="bg-white"
                            name="description"
                            onChange={formik.handleChange("description")}
                            value={formik.values.description}
                        />
                    </div>
                    <div className="mb-4 img-upload">
                        <Dropzone
                            onDrop={(acceptedFiles) => {
                                dispatch(uploadImg(acceptedFiles));
                            }}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div className="add-img-icon">
                                            <ImUpload />
                                        </div>
                                        <p>
                                            Drag and drop some files here, or
                                            click to select files
                                        </p>
                                        <p className="instructions">
                                            Upload your product photos here
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="product-images">
                        {imagesState.map((img, i) => {
                            return (
                                <div key={i}>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={() => {
                                            dispatch(
                                                deleteImg({
                                                    id: img.public_id,
                                                    images: imagesState,
                                                })
                                            );
                                        }}
                                    >
                                        <IoClose />
                                    </button>
                                    <img src={img?.url} alt="product" />
                                </div>
                            );
                        })}
                    </div>
                    <div className="d-flex justify-content-center mt-4 btns">
                        <button type="submit" className="btn button">
                            Add Product
                        </button>
                        {successState && (
                            <button
                                className="btn button reset-product"
                                onClick={() => {
                                    dispatch(resetImages());
                                    dispatch(resetProduct());
                                    formik.resetForm();
                                }}
                            >
                                Add Another
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
