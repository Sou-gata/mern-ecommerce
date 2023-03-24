import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getEnquiry } from "../features/enquiry/enquirySlice";
import { toast } from "react-toastify";
import { dateToString } from "../utils/extraFunctions";

const ViewFullEnquiry = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [date, setDate] = useState({ date: "00-00-0000", time: "00:00 AM" });
    useEffect(() => {
        const getData = async () => {
            const a = await dispatch(getEnquiry(id));
            if (a.payload?.success) {
                setData(a.payload);
                setDate(dateToString(a.payload.createdAt));
            } else {
                toast.error("Something went wrong");
            }
        };
        getData();
    }, [dispatch]);
    return (
        <div className="single-enq-wrapper">
            <Link to="/admin/enquiries">
                <IoMdArrowBack className="fs-5 me-2" />
                Back to all enquiries
            </Link>
            <div>
                <div className="flex-between">
                    <div>
                        <h4>Name</h4>
                        <p>{data.name}</p>
                    </div>
                    <div>
                        <h4>Phone Number</h4>
                        <p>{data.mobile}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{data.email}</p>
                    </div>
                    <div>
                        <h4>Asked On</h4>
                        <p className="mb-0">{date.date}</p>
                        <p className="mb-0">{date.time}</p>
                    </div>
                </div>
                <div>
                    <h4>Enquiry</h4>
                    <p>{data.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewFullEnquiry;
