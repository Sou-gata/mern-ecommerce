import { deleteCoupon, getCoupons } from "../features/coupon/couponSlice";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { pad, addCommaToPrice } from "../utils/extraFunctions";
import CustomPopup from "../components/CustomPopup";

const CouponList = () => {
    const dispatch = useDispatch();
    const [tableData, setTableData] = useState([]);
    const [open, setOpen] = useState(false);
    const [idToDelete, setId] = useState("");
    useEffect(() => {
        const getData = async () => {
            let info = await dispatch(getCoupons());
            info = info.payload;
            let temp = [];
            for (let i = 0; i < info?.length; i++) {
                const expDateTime = new Date(info[i]?.expiry);
                const expDate =
                    pad(expDateTime.getDate()) +
                    "-" +
                    pad(expDateTime.getMonth() + 1) +
                    "-" +
                    expDateTime.getFullYear();
                temp.push({
                    key: info[i]._id,
                    no: i + 1,
                    code: info[i].name,
                    discount: info[i].discount,
                    max: info[i].discountAbove,
                    expDate: expDate,
                });
            }
            setTableData(temp);
        };
        getData();
    }, [dispatch]);
    const columns = [
        {
            title: "No",
            dataIndex: "no",
            key: "no",
            width: 50,
        },
        {
            title: "Coupon code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Discount",
            dataIndex: "discount",
            key: "discount",
            render: (text) => <p className="mb-0">{text} %</p>,
        },
        {
            title: "Maximum Discount",
            dataIndex: "max",
            key: "max",
            render: (text) => <p className="mb-0">₹ {addCommaToPrice(text)}</p>,
        },
        {
            title: "Expairy Date",
            dataIndex: "expDate",
            key: "expDate",
        },
        {
            title: "Action",
            key: "action",
            width: 175,
            render: (_, record) => {
                return (
                    <div className="d-flex brand-action">
                        <Link to={`/admin/coupon/${record.key}`}>
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
                );
            },
        },
    ];
    return (
        <div>
            <h3 className="mb-4 title">Coupon List</h3>
            <Table columns={columns} dataSource={tableData} />
            <CustomPopup
                open={{ open, setOpen }}
                func={deleteCoupon}
                id={idToDelete}
                tableData={{ tableData, setTableData }}
                name="coupon"
            />
        </div>
    );
};

export default CouponList;
