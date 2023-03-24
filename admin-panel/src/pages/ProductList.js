import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { getProducts, deleteProduct } from "../features/product/productSlice";
import { AiFillEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addCommaToPrice } from "../utils/extraFunctions";
import CustomPopup from "../components/CustomPopup";

const ProductList = () => {
    const dispatch = useDispatch();
    const [tableData, setTableData] = useState([]);
    const [open, setOpen] = useState(false);
    const [idToDelete, setId] = useState("");
    useEffect(() => {
        const getData = async () => {
            let info = await dispatch(getProducts());
            info = info.payload;
            let temp = [];
            for (let i = 0; i < info?.length; i++) {
                temp.push({
                    key: info[i]?._id,
                    name: info[i]?.title,
                    brand: info[i]?.brand,
                    price: "₹ " + addCommaToPrice(info[i]?.price),
                    quantity: info[i]?.quantity,
                });
            }
            setTableData(temp);
        };
        getData();
    }, [dispatch]);
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
            width: 175,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            width: 100,
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            width: 100,
        },
        {
            title: "Action",
            key: "action",
            width: 180,
            render: (_, record) => (
                <div className="d-flex procuct-action">
                    <Link to={`/admin/view-product/${record.key}`}>
                        <AiFillEye />
                    </Link>
                    <Link to={`/admin/product/${record.key}`}>
                        <AiOutlineEdit />
                    </Link>
                    <button
                        onClick={() => {
                            setOpen(true);
                            setId(record.key);
                        }}
                    >
                        <AiOutlineDelete />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <h3 className="mb-4 title">Product List</h3>
            <Table columns={columns} dataSource={tableData} />
            <CustomPopup
                open={{ open, setOpen }}
                func={deleteProduct}
                id={idToDelete}
                tableData={{ tableData, setTableData }}
                name="product"
            />
        </div>
    );
};

export default ProductList;
