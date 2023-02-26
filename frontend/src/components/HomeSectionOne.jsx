import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
const demoData = [
    {
        src: "images/catbanner-01.jpg",
        h4: "Best Sale",
        h5: "Laptops Max",
        p: "From $1699.00 or $64.62/mo.",
    },
    {
        src: "images/catbanner-02.jpg",
        h4: "NEW ARRIVAL",
        h5: "Buy IPad Air",
        p: "From $599.00 or $49.91/mo.",
    },
    {
        src: "images/catbanner-03.jpg",
        h4: "15% off",
        h5: "Smartwatch 7",
        p: "shop the latest band styles and colors.",
    },
    {
        src: "images/catbanner-04.jpg",
        h4: "Free engraving",
        h5: "AirPods Max",
        p: "High-fidelity playback & ultra-low distortion",
    },
];
const demoData2 = [
    {
        src: "images/main-banner-1.jpg",
        h4: "Supercharged for pros.",
        h5: "iPad s13+ Pro.",
        p: "From $999.00 of 41.62/mo.for 24 mo. Footnote*",
    },
    {
        src: "images/main-banner.jpg",
        h4: "Supercharged for pros.",
        h5: "Speacial Sale",
        p: "From $999.00 of 41.62/mo.for 24 mo. Footnote*",
    },
];

const HomeSectionOne = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <section className="home-wrapper-1 py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6 main-banner py-2 position-relative">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {demoData2.map((item, i) => {
                                return (
                                    <Carousel.Item key={i}>
                                        <div className="carousel-item active">
                                            <img
                                                className="img-fluid rounded-3"
                                                src={item.src}
                                                alt="main-banner"
                                            />
                                            <div className="main-banner-content">
                                                <h4>{item.h4}</h4>
                                                <h5>{item.h5}</h5>
                                                <p>{item.p}</p>
                                                <Link className="button">
                                                    BUY NOW
                                                </Link>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            {demoData.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="small-banner py-2 position-relative"
                                    >
                                        <img
                                            className="img-fluid rounded-3"
                                            src={item.src}
                                            alt="main-banner"
                                        />
                                        <div className="small-banner-content">
                                            <h4>{item.h4}</h4>
                                            <h5>{item.h5}</h5>
                                            <p>{item.p}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionOne;
