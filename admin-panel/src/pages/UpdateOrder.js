import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOrder, updateOrder } from "../features/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import CustomInputs from "../components/CustomInputs";
import { toast } from "react-toastify";

const UpdateOrder = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const [display, setDisplay] = useState(false);
    let id = location.pathname.split("/")[3];
    let schema = object({
        status: string().required("Brand name is required"),
        trackingAddress: string(),
        trackingId: string(),
    });
    useEffect(() => {
        const getOrderDetails = async () => {
            const a = await dispatch(getOrder(id));
            let data = a.payload;
            setStatus(data.orderStatus);
            formik.values.status = data.orderStatus;
            formik.values.trackingAddress =
                data.trackingAddress !== null &&
                data.trackingAddress !== undefined
                    ? data.trackingAddress
                    : "";
            formik.values.trackingId =
                data.trackingId !== null && data.trackingId !== undefined
                    ? data.trackingId
                    : "";
        };
        getOrderDetails();
    }, [dispatch, id]);
    const handleChangestatus = (e) => {
        setStatus(e.target.value);
        formik.values.status = e.target.value;
        if (e.target.value !== "Dispatched") {
            formik.values.trackingAddress = "";
            formik.values.trackingId = "";
        }
    };
    useEffect(() => {
        if (status === "Dispatched") {
            setDisplay(true);
        } else setDisplay(false);
    }, [status]);
    const formik = useFormik({
        initialValues: {
            status: "",
            trackingAddress: "",
            trackingId: "",
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            let value = { ...values };
            if (value.trackingAddress === "") value.trackingAddress = undefined;
            if (value.trackingId === "") value.trackingId = undefined;

            let a = await dispatch(updateOrder({ id, data: value }));
            if (a.meta.requestStatus === "fulfilled") {
                toast.success("Order updated successfully");
                navigate("/admin/orders/");
            } else {
                toast.error("Something went wrong");
            }
        },
    });
    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <select
                    name="status"
                    id=""
                    className="form-select mb-4"
                    onChange={(e) => handleChangestatus(e)}
                    value={status}
                >
                    <option value="default" disabled>
                        Selet status
                    </option>
                    <option value="Not Processed">Not Processed </option>
                    <option value="Processing">Processing</option>
                    <option value="Processed">Processed</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Delivered">Delivered</option>
                </select>
                {display && (
                    <div>
                        <CustomInputs
                            label="Enter tracking id"
                            name="trackingId"
                            type="text"
                            onChange={formik.handleChange("trackingId")}
                            value={formik.values.trackingId}
                        />
                        <CustomInputs
                            label="Enter delivery service name"
                            type="text"
                            name="trackingAddress"
                            onChange={formik.handleChange("trackingAddress")}
                            value={formik.values.trackingAddress}
                        />
                    </div>
                )}

                <button type="submit" className="btn button">
                    Submit
                </button>
                <button
                    className="btn button ms-3"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/admin/orders/");
                    }}
                >
                    Cancle
                </button>
            </form>
        </div>
    );
};

export default UpdateOrder;
