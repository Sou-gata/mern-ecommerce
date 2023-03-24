import React, { useEffect, useState } from "react";
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
    resetImages,
    uploadImg,
} from "../features/upload/uploadSlice";
import { IoClose } from "react-icons/io5";
import { updateProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";
import { getProduct } from "../features/product/productSlice";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [prod, setProd] = useState({
    //     brand: "",
    //     category: "",
    //     description: "",
    //     images: [],
    //     price: "",
    //     quantity: "",
    //     tags: "",
    //     title: "",
    // });
    const [images, setImages] = useState([]);
    let id = location.pathname.split("/")[3];

    const brandState = useSelector((state) => state.brands.brands);
    const categoryState = useSelector((state) => state.pCategory.pCategories);
    const newImageState = useSelector((state) => state.upload.images);
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
        onSubmit: async (values) => {
            const a = await dispatch(updateProduct({ id, data: values }));
            if (a.meta.requestStatus === "fulfilled") {
                dispatch(resetImages());
                toast.success("Order updated successfully");
                navigate("/admin/list-product/");
            } else {
                toast.error("Something went wrong");
            }
        },
    });
    formik.values.images = [...images, ...newImageState];
    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        const getData = async () => {
            const a = await dispatch(getProduct(id));
            const info = a.payload;
            formik.values.title = info.title;
            formik.values.description = info.description;
            formik.values.price = info.price;
            formik.values.quantity = info.quantity;
            formik.values.brand = info.brand;
            formik.values.category = info.category;
            formik.values.tags = info.tags;
            setImages(info.images);
        };
        getData();
    }, [dispatch]);
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
                        {[...images, ...newImageState].map((img, i) => {
                            return (
                                <div key={i}>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={() => {
                                            let newimages = images.filter(
                                                (imgs) => {
                                                    return (
                                                        imgs.public_id !==
                                                        img.public_id
                                                    );
                                                }
                                            );
                                            setImages(newimages);
                                            console.log(newimages, [
                                                ...newimages,
                                                ...newImageState,
                                            ]);
                                            dispatch(
                                                deleteImg({
                                                    id: img.public_id,
                                                    images: newImageState,
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
                            Update Product
                        </button>
                        <button
                            className="btn button"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/admin/list-product/");
                            }}
                        >
                            Cancle
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
