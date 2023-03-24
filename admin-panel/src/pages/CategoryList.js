import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
    deleteCategory,
    getCategories,
} from "../features/pcategory/pcategorySlice";
import CustomPopup from "../components/CustomPopup";

const CategoryList = () => {
    const [tableData, setTableData] = useState([]);
    const [open, setOpen] = useState(false);
    const [idToDelete, setId] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        const getData = async () => {
            let info = await dispatch(getCategories());
            info = info.payload;
            let temp = [];
            for (let i = 0; i < info?.length; i++) {
                temp.push({
                    key: info[i]?._id,
                    name: info[i]?.title,
                    id: info[i]?._id,
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
            title: "Action",
            key: "action",
            width: 175,
            render: (_, record) => (
                <div className="d-flex brand-action">
                    <Link to={`/admin/category/${record.key}`}>
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
            <h3 className="mb-4 title">Category List</h3>
            <Table columns={columns} dataSource={tableData} />
            <CustomPopup
                open={{ open, setOpen }}
                func={deleteCategory}
                id={idToDelete}
                tableData={{ tableData, setTableData }}
                name="category"
            />
        </div>
    );
};

export default CategoryList;
