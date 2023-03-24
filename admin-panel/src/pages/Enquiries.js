import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteEnquiry, getEnquiries } from "../features/enquiry/enquirySlice";
import { shortString } from "../utils/extraFunctions";
import CustomPopup from "../components/CustomPopup";

const Enquiries = () => {
    const dispatch = useDispatch();
    const [tableData, setTableData] = useState([]);
    const [open, setOpen] = useState(false);
    const [idToDelete, setId] = useState("");
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Comment",
            dataIndex: "comment",
            key: "eomment",
        },
        {
            title: "Action",
            key: "action",
            width: 175,
            render: (_, record) => (
                <div className="d-flex brand-action">
                    <Link to={`/admin/enquiry/${record.key}`}>
                        <AiFillEye />
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
    useEffect(() => {
        const getData = async () => {
            const a = await dispatch(getEnquiries());
            if (a.payload.success) {
                let data = [];
                let temp = a.payload?.data;
                for (let i = 0; i < temp?.length || 0; i++) {
                    data.push({
                        key: temp[i]._id,
                        name: temp[i].name,
                        email: temp[i].email,
                        comment: shortString(temp[i].comment, 60),
                    });
                }
                setTableData(data);
            }
        };
        getData();
    }, [dispatch]);
    return (
        <div>
            <h3 className="mb-4 title">Enquiries</h3>
            <Table columns={columns} dataSource={tableData} />
            <CustomPopup
                open={{ open, setOpen }}
                func={deleteEnquiry}
                id={idToDelete}
                tableData={{ tableData, setTableData }}
                name="enquiry"
            />
        </div>
    );
};

export default Enquiries;
