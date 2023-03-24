import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    blockUser,
    getUsers,
    unblockUser,
} from "../features/customers/customerSlice";
import { toast } from "react-toastify";

const Customers = () => {
    const customerState = useSelector((state) => state.customer.customers);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <p>{text}</p>,
        },
        {
            title: "Mobile No.",
            dataIndex: "mobile",
            key: "mobile",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Action",
            key: "block",
            dataIndex: "block",
            width: 100,
            render: (_, block) => {
                return (
                    <div>
                        {!block.block && (
                            <button
                                className="btn block"
                                onClick={async () => {
                                    const a = await dispatch(
                                        blockUser(block.key)
                                    );
                                    if (a.payload.success) {
                                        dispatch(getUsers());
                                        toast.success(
                                            "User blocked successfully"
                                        );
                                    } else {
                                        toast.error("Something went wrong");
                                    }
                                }}
                            >
                                Block
                            </button>
                        )}
                        {block.block && (
                            <button
                                className="btn unblock"
                                onClick={async () => {
                                    const a = await dispatch(
                                        unblockUser(block.key)
                                    );
                                    if (a.payload.success) {
                                        dispatch(getUsers());
                                        toast.success(
                                            "User unblocked successfully"
                                        );
                                    } else {
                                        toast.error("Something went wrong");
                                    }
                                }}
                            >
                                Unblock
                            </button>
                        )}
                    </div>
                );
            },
        },
    ];
    let data = [];
    for (let i = 0; i < customerState?.length; i++) {
        data.push({
            key: customerState[i]._id,
            name: customerState[i].firstname + " " + customerState[i].lastname,
            mobile: customerState[i].mobile,
            email: customerState[i].email,
            block: customerState[i].isBlocked,
        });
    }
    return (
        <div>
            <h3 className="mb-4 title">Customers</h3>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default Customers;
