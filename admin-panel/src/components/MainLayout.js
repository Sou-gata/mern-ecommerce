import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    AiOutlineDashboard,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import {
    BsCartPlus,
    BsQuestionCircle,
    BsFillTicketPerforatedFill,
} from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { ImTicket } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList as HiClipboard } from "react-icons/hi2";

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { Header, Sider, Content } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            navigate("/");
        }
    }, [navigate]);
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className="py-3 fs-5 mb-0">
                        <span className="sm-logo">ST</span>
                        <span className="lg-logo">Sougata</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["/admin"]}
                    onClick={({ key }) => {
                        if (key === "signout") {
                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: "/admin",
                            icon: <AiOutlineDashboard className="fs-4" />,
                            label: "Dashboard",
                        },
                        {
                            key: "customers",
                            icon: <AiOutlineUser className="fs-4" />,
                            label: "Customers",
                        },
                        {
                            key: "catalog",
                            icon: <FiBook className="fs-4" />,
                            label: "Catalog",
                            children: [
                                {
                                    key: "product",
                                    icon: <BsCartPlus className="fs-4" />,
                                    label: "Add Product",
                                },
                                {
                                    key: "list-product",
                                    icon: <HiClipboard className="fs-4" />,
                                    label: "Product List",
                                },
                                {
                                    key: "brand",
                                    icon: <FaReact className="fs-4" />,
                                    label: "Add Brand",
                                },
                                {
                                    key: "list-brand",
                                    icon: <HiClipboard className="fs-4" />,
                                    label: "Brand List",
                                },
                                {
                                    key: "category",
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: "Add Category",
                                },
                                {
                                    key: "list-category",
                                    icon: <HiClipboard className="fs-4" />,
                                    label: "Category List",
                                },
                            ],
                        },
                        {
                            key: "orders",
                            icon: <AiOutlineShoppingCart className="fs-4" />,
                            label: "Orders",
                        },
                        {
                            key: "enquiries",
                            icon: <BsQuestionCircle className="fs-4" />,
                            label: "Enquiries",
                        },
                        {
                            key: "coupons",
                            icon: (
                                <BsFillTicketPerforatedFill className="fs-4" />
                            ),
                            label: "Coupon",
                            children: [
                                {
                                    key: "coupon",
                                    icon: <ImTicket className="fs-4" />,
                                    label: "Add Coupon",
                                },
                                {
                                    key: "list-coupon",
                                    icon: <IoTicketOutline className="fs-4" />,
                                    label: "Coupon List",
                                },
                            ],
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="d-flex justify-content-between align-items-center ps-1 pe-5"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <div className="flex-between">
                        <div className="d-flex gap-3">
                            <div className="header-notification">
                                <IoIosNotifications className="fs-3" />
                                <span>3</span>
                            </div>
                            <div>
                                <div className="dropdown ">
                                    <div
                                        className="dropdown-toggle d-flex"
                                        href="#"
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <div className="dp-container">
                                            <img
                                                src="/images/profile.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="user-details d-flex justify-content-center flex-column">
                                            <h5>
                                                {`${user?.firstname}  ${user?.lastname}`}
                                            </h5>
                                            <p>{user?.email}</p>
                                        </div>
                                    </div>

                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <li>
                                            <Link
                                                to="/"
                                                className="dropdown-item mb-0"
                                            >
                                                View Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item mb-0"
                                                onClick={() => {
                                                    localStorage.removeItem(
                                                        "user"
                                                    );
                                                    navigate("/");
                                                }}
                                            >
                                                Sign Out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ToastContainer
                        position="top-right"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        theme="light"
                    />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
