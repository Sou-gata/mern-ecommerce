import React from "react";
import { Space, Table, Tag } from "antd";

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

const ProductList = () => {
    return (
        <div>
            <h3 className="mb-4 title">Product List</h3>
            <Table columns={columns} dataSource={data2} />
        </div>
    );
};

export default ProductList;
