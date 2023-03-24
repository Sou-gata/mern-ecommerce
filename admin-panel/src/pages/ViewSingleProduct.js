import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../features/product/productSlice";
import { addCommaToPrice } from "../utils/extraFunctions";
import { IoMdArrowBack } from "react-icons/io";

const ViewSingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [data, setData] = useState({ images: [] });
    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(getProduct(id));
            setData(data.payload);
            console.log(data.payload);
        };
        getData();
    }, [dispatch]);
    return (
        <div className="view-product">
            <Link to="/admin/list-product">
                <IoMdArrowBack className="fs-5 me-2" />
                Back to products
            </Link>
            <div className="flex-between">
                <div>
                    <h4>Title</h4>
                    <p>{data.title}</p>
                </div>
                <div>
                    <h4>Brand</h4>
                    <p>{data.brand}</p>
                </div>
                <div>
                    <h4>Category</h4>
                    <p>{data.category}</p>
                </div>
                <div>
                    <h4>Price</h4>
                    <p>₹ {addCommaToPrice(data.price ? data.price : 0)}</p>
                </div>
                <div>
                    <h4>Quantity</h4>
                    <p>{data.quantity}</p>
                </div>
            </div>
            <div>
                <h4>Description</h4>
                <div
                    dangerouslySetInnerHTML={{ __html: data.description }}
                ></div>
            </div>
            <div>
                <h4 className="mb-4">Images</h4>
                <div className="view-product-imgs">
                    {data?.images?.map((item, i) => {
                        return (
                            <div key={i}>
                                <img src={item.url} alt={item.public_id} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ViewSingleProduct;
