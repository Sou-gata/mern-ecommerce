import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogCard = ({ item }) => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <>
            <div className={path === "/blogs" ? "col-6 mb-4" : `col-3`}>
                <div className="blog-card">
                    <div className="card-image">
                        <img src={item.img} className="img-fluid" alt="blog" />
                    </div>
                    <div className="blog-content">
                        <p className="date">{item.date}</p>
                        <h5 className="title">{item.title}</h5>
                        <p className="desc">{item.desc}</p>
                        <Link to="/blog/123" className="button">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
