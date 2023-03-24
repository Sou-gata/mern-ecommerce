import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEye, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getOrders } from "../features/auth/authSlice";
import {
    addCommaToPrice,
    dateToString,
    pad,
    timeConvertor,
} from "../utils/extraFunctions";

const Orders = () => {
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const getData = async () => {
            let info = await dispatch(getOrders());
            info = info.payload;
            let temp = [];
            for (let i = 0; i < info?.length; i++) {
                const name =
                    info[i].orderby.firstname + " " + info[i].orderby.lastname;
                const mobile = info[i].orderby.mobile;
                let orderDate = info[i].createdAt;
                orderDate = dateToString(orderDate);
                let orderDay = orderDate.date;
                const orderTime = orderDate.time;
                const orderStatus = info[i].orderStatus;
                const paymentIntent = info[i].paymentIntent.amount;
                const method = info[i].paymentIntent.method;
                temp.push({
                    key: info[i]?._id,
                    details: { name, mobile },
                    order: { date: orderDay, time: orderTime },
                    amount: { price: paymentIntent, method },
                    status: orderStatus,
                });
            }
            setTableData(temp);
        };
        getData();
    }, [dispatch]);

    const columns = [
        {
            title: "Customer info",
            dataIndex: "details",
            key: "details",
            render: (obj) => {
                return (
                    <div>
                        <p>{obj.name}</p>
                        <p>{obj.mobile}</p>
                    </div>
                );
            },
        },
        {
            title: "Order date",
            dataIndex: "order",
            key: "order",
            render: (obj) => {
                return (
                    <div>
                        <p>{obj.date}</p>
                        <p>{obj.time}</p>
                    </div>
                );
            },
        },
        {
            title: "Total amount",
            dataIndex: "amount",
            key: "amount",
            render: (obj) => {
                let color;
                if (obj.method?.toLocaleLowerCase() === "cod") {
                    color = "volcano";
                } else {
                    color = "green";
                }
                return (
                    <div>
                        <p>₹ {addCommaToPrice(obj.price)}</p>
                        <Tag color={color} key={obj.method}>
                            {obj.method}
                        </Tag>
                    </div>
                );
            },
        },
        {
            title: "Order status",
            dataIndex: "status",
            key: "status",
            render: (str) => {
                let color;
                if (str?.toLocaleLowerCase() === "delivered") {
                    color = "green";
                } else if (str?.toLocaleLowerCase() === "processing") {
                    color = "yellow";
                } else if (str?.toLocaleLowerCase() === "processed") {
                    color = "#85a832";
                } else if (str?.toLocaleLowerCase() === "dispatched") {
                    color = "geekblue";
                } else if (str?.toLocaleLowerCase() === "dancelled") {
                    color = "red";
                } else {
                    color = "volcano";
                }
                return (
                    <Tag color={color} key={str}>
                        {str.toUpperCase()}
                    </Tag>
                );
            },
        },
        {
            title: "Action",
            key: "action",
            width: 180,
            render: (_, record) => {
                return (
                    <div className="d-flex procuct-action">
                        <Link to={record.key}>
                            <AiFillEye />
                        </Link>
                        <Link to={`/admin/order/${record.key}`}>
                            <AiOutlineEdit />
                        </Link>
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            <h3 className="mb-4 title">Orders</h3>
            <Table
                className="order-table"
                columns={columns}
                dataSource={tableData}
            />
        </div>
    );
};

export default Orders;
