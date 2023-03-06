import React from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";

const SingleBlog = () => {
    return (
        <>
            <Meta title="Blog" />
            <BradCrumb title="Blog" />
            <div className="blog-wrapper home-wrapper-2 py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <h3 className="title">
                                    A Beautiful Sunday Morning
                                </h3>
                                <img src="/images/blog-2.jpg" alt="blog" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Minima labore dolore modi
                                    atque explicabo ipsa. Provident delectus
                                    pariatur magnam et hic perspiciatis eius,
                                    modi, maxime quasi officiis maiores sint est
                                    deserunt vitae rerum quibusdam numquam dolor
                                    exercitationem iure error consectetur
                                    tempora dolorum? Magni excepturi quo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;
