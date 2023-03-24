import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { addCommaToPrice, dateToString } from "../utils/extraFunctions";
import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowBack } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { getOrders } from "../features/auth/authSlice";

const ViewSingleOrder = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    let orderState = useSelector((state) => state.auth.orders);
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);
    const order = orderState.find((element) => element._id === id);
    let createdAt = dateToString(order?.createdAt);
    let date = createdAt.date;
    let time = createdAt.time;
    return (
        <>
            <div className="single-order-wrapper">
                <Link to="/admin/orders">
                    <IoMdArrowBack className="fs-5 me-2" />
                    Back to all orders
                </Link>
                <div className="py-3">
                    <div className="customer-details d-flex">
                        <div>
                            <h6>Customer name</h6>
                            <p>
                                {order?.orderby?.firstname +
                                    " " +
                                    order?.orderby?.lastname}
                            </p>
                        </div>
                        <div>
                            <h6>Email</h6>
                            <p>{order?.orderby?.email}</p>
                        </div>
                        <div>
                            <h6>Phone number</h6>
                            <p>{order?.orderby?.mobile}</p>
                        </div>
                        <div>
                            <h6>Address</h6>
                            <p>Out Coloy, Gangarampur</p>
                        </div>
                    </div>
                    <div className="order-details d-flex justify-content-between">
                        <div>
                            <h6>Order date</h6>
                            <p>{date}</p>
                        </div>
                        <div>
                            <h6>Time</h6>
                            <p>{time}</p>
                        </div>
                        <div>
                            <h6>Total Amount</h6>
                            <p>
                                ₹{" "}
                                {addCommaToPrice(
                                    order?.paymentIntent?.amount
                                        ? order?.paymentIntent?.amount
                                        : 0
                                )}
                            </p>
                        </div>
                        <div>
                            <h6>Paymet method</h6>
                            <p>{order?.paymentIntent?.method}</p>
                        </div>
                        <div>
                            <h6>Order status</h6>
                            <p>{order?.orderStatus}</p>
                        </div>
                    </div>
                    <div className="product-details">
                        <h6>Order items</h6>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price/pis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order?.products?.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.product?.title}</td>
                                            <td>{item.product?.brand}</td>
                                            <td>{item.count}</td>
                                            <td>
                                                ₹{" "}
                                                {addCommaToPrice(
                                                    item.product?.price || 0
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="edit-order">
                        <Link to={`/admin/order/${id}`}>
                            <div>
                                <BiEdit />
                                <button className="btn primary">Edit</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewSingleOrder;
