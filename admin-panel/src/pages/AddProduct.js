import React, { useState } from "react";
import CustomInputs from "../components/CustomInputs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
    },
};

const AddProduct = () => {
    const [desc, setDesc] = useState("");
    return (
        <div className="add-product-wrapper">
            <h3 className="mb-4 title">Add Product</h3>
            <div>
                <form action="">
                    <div className="flex-between">
                        <CustomInputs type="text" label="Enter Product Title" />
                        <CustomInputs
                            type="number"
                            label="Enter Product Price"
                        />
                    </div>
                    <div className="flex-between">
                        <select
                            name=""
                            id=""
                            defaultValue="default"
                            className="form-select mb-4"
                        >
                            <option value="default" disabled>
                                Selet Category
                            </option>
                        </select>
                        <select
                            name=""
                            id=""
                            defaultValue="default"
                            className="form-select mb-4"
                        >
                            <option value="default" disabled>
                                Selet Colour
                            </option>
                        </select>
                    </div>
                    <div className="flex-between">
                        <select
                            name=""
                            id=""
                            defaultValue="default"
                            className="form-select mb-4"
                        >
                            <option value="default" disabled>
                                Selet Brand
                            </option>
                        </select>
                        <CustomInputs
                            type="number"
                            label="Enter Product Quantity"
                        />
                    </div>
                    <div className="mb-4">
                        <h6>Description</h6>
                        <ReactQuill
                            theme="snow"
                            value={desc}
                            onChange={setDesc}
                            className="bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Add product
                                images
                            </p>
                        </Dragger>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            type="submit"
                            className="btn button"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
