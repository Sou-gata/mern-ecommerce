import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
    return (
        <>
            <div className="col-3">
                <div className="blog-card">
                    <div className="card-image">
                        <img src={item.img} className="img-fluid" alt="blog" />
                    </div>
                    <div className="blog-content">
                        <p className="date">{item.date}</p>
                        <h5 className="title">{item.title}</h5>
                        <p className="desc">{item.desc}</p>
                        <Link className="button">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
