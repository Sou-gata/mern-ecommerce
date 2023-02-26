import React from "react";

const demoData3 = [
    {
        src: "images/service.png",
        h6: "Free Shipping",
        p: "From all orders over $100",
    },
    {
        src: "images/service-02.png",
        h6: "Daily Surprice Offers",
        p: "Save up to 25% off",
    },
    {
        src: "images/service-03.png",
        h6: "Support 24/7",
        p: "Shop with an expert",
    },
    {
        src: "images/service-04.png",
        h6: "Affordable Prices",
        p: " Get Factory direct price",
    },
    {
        src: "images/service-04.png",
        h6: "Secure Payments",
        p: "100% Procted Payments",
    },
];
const demoData4 = [
    { src: "images/camera.jpg", h6: "Cameras", p: "10 items" },
    { src: "images/tv.jpg", h6: "Smart TV", p: "10 items" },
    { src: "images/headphone.jpg", h6: "Headphones", p: "10 items" },
    { src: "images/watch.jpg", h6: "Watches", p: "10 items" },
    { src: "images/laptop.jpg", h6: "Computer & Laptop", p: "10 items" },
    { src: "images/gaming.jpg", h6: "Music & Gaming", p: "10 items" },
    { src: "images/speaker.jpg", h6: "Protable Speakers", p: "10 items" },
    { src: "images/homeapp.jpg", h6: "Home Appliances", p: "10 items" },
    { src: "images/acc.jpg", h6: "Accessories", p: "10 items" },
    { src: "images/mobile.jpg", h6: "Mobiles & Tablets", p: "10 items" },
];

const HomeSectionTwo = () => {
    return (
        <>
            <section className="home-wrapper-2 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-around">
                                {demoData3.map((item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="d-flex align-items-center gap-15"
                                        >
                                            <img src={item.src} alt="service" />
                                            <div>
                                                <h6>{item.h6}</h6>
                                                <p className="mb-0">{item.p}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-3 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                                {demoData4.map((item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="d-flex gap-30 align-items-center justify-content-between p-2"
                                        >
                                            <div>
                                                <h6>{item.h6}</h6>
                                                <p className="mb-0">{item.p}</p>
                                            </div>
                                            <img src={item.src} alt="" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeSectionTwo;
