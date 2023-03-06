import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";

const demoData = {
    img: "images/blog-1.jpg",
    date: "12 Dec, 2022",
    title: "A Beautiful Sunday Morning ...",
    desc: "You're only as good as your last collection, which is an enormous pressure. I think there is something about...",
};

const Blog = () => {
    return (
        <>
            <Meta title="Blogs" />
            <BradCrumb title="Blogs" />
            <div className="blog-wrapper home-wrapper-2 py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-2">
                                <h3 className="filter-title">
                                    Find By categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <BlogCard item={demoData} />
                                <BlogCard item={demoData} />
                                <BlogCard item={demoData} />
                                <BlogCard item={demoData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
