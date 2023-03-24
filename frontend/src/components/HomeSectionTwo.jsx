import React from "react";
import Container from "./Container";
import { services } from "../utils/data";

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
            <Container class1="home-wrapper-2 py-3">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-around">
                            {services.map((item, i) => (
                                <div
                                    key={i}
                                    className="d-flex align-items-center gap-15"
                                >
                                    <img src={item.image} alt="service" />
                                    <div>
                                        <h6>{item.title}</h6>
                                        <p className="mb-0">{item.tagline}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-3">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                            {demoData4.map((item, i) => (
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
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default HomeSectionTwo;
