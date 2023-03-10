import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Space, Table, Tag } from "antd";

const Dashboard = () => {
    const data = [
        {
            type: "April",
            sales: 32,
        },
        {
            type: "May",
            sales: 50,
        },
        {
            type: "June",
            sales: 44,
        },
        {
            type: "July",
            sales: 37,
        },
        {
            type: "August",
            sales: 38,
        },
        {
            type: "September",
            sales: 52,
        },
        {
            type: "October",
            sales: 61,
        },
        {
            type: "Novembar",
            sales: 45,
        },
        {
            type: "Decembar",
            sales: 48,
        },
        {
            type: "January",
            sales: 38,
        },
        {
            type: "February",
            sales: 38,
        },
        {
            type: "March",
            sales: 38,
        },
    ];
    const config = {
        data,
        xField: "type",
        yField: "sales",
        columnWidthRatio: 0.5,
        color: () => {
            return "#1890ff";
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        label: {
            position: "middle",
            style: {
                fill: "#ffffff",
            },
        },
        meta: {
            type: {
                alias: "Months",
            },
            sales: {
                alias: "sales",
            },
        },
    };

    const columns = [
        {
            title: "No",
            dataIndex: "no",
            key: "no",
            render: (text) => <p>{text}</p>,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <p>{text}</p>,
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Status",
            key: "tags",
            dataIndex: "tags",
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color;
                        if (tag?.toLocaleLowerCase() === "success") {
                            color = "green";
                        } else if (tag?.toLocaleLowerCase() === "pending") {
                            color = "geekblue";
                        } else {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <p>Delete</p>
                </Space>
            ),
        },
    ];
    const data2 = [
        {
            key: "1",
            no: "#12345",
            quantity: "2",
            price: 100,
            name: "John Brown",
            tags: ["success"],
        },
        {
            key: "2",
            no: "#07684",
            quantity: "1",
            price: 100,
            name: "Jim Green",
            tags: ["Pending"],
        },
        {
            key: "3",
            no: "#07689",
            quantity: "3",
            price: 100,
            name: "Joe Black",
            tags: ["faild"],
        },
    ];

    return (
        <div className="dashboard">
            <h3 className="mb-4 title">Dashboard</h3>
            <div className="flex-between gap-3 sell-info">
                <div className="p-3">
                    <div>
                        <p>Total sell</p>
                        <h4 className="sub-title">$1000</h4>
                    </div>
                    <div>
                        <h6 className="green">
                            <BsArrowUpRight className="me-2" />
                            32%
                        </h6>
                        <p className="mb-0">Compared to February 2023</p>
                    </div>
                </div>
                <div className="p-3">
                    <div>
                        <p>Average order value</p>
                        <h4 className="sub-title">$1000</h4>
                    </div>
                    <div>
                        <h6 className="red">
                            <BsArrowDownRight className="me-2" />
                            32%
                        </h6>
                        <p className="mb-0">Compared to February 2023</p>
                    </div>
                </div>
                <div className="p-3">
                    <div>
                        <p>Total orders</p>
                        <h4 className="sub-title">768</h4>
                    </div>
                    <div>
                        <h6 className="green">
                            <BsArrowUpRight className="me-2" />
                            32%
                        </h6>
                        <p className="mb-0">Compared to February 2023</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="mb-4 sub-title">Sell Statistics</h3>
                <div>
                    <Column {...config} />
                </div>
                <div className="mt-4">
                    <h3 className="mb-4 sub-title">Recent Orders</h3>
                    <div>
                        <Table columns={columns} dataSource={data2} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
