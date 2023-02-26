import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionTwo from "../components/HomeSectionTwo";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import { Link } from "react-router-dom";

const demoData5 = [
    { src: "images/brand-01.png" },
    { src: "images/brand-02.png" },
    { src: "images/brand-03.png" },
    { src: "images/brand-04.png" },
    { src: "images/brand-05.png" },
    { src: "images/brand-06.png" },
    { src: "images/brand-07.png" },
    { src: "images/brand-08.png" },
];

const demoData6 = [
    {
        img: "images/blog-1.jpg",
        date: "12 Dec, 2022",
        title: "A Beautiful Sunday Morning ...",
        desc: "You're only as good as your last collection, which is an enormous pressure. I think there is something about...",
    },
    {
        img: "images/blog-2.jpg",
        date: "12 Dec, 2022",
        title: "sed ut practice under omnis...",
        desc: "to enjoy alternately the sight of their distress. he really shouted with pleasure; and shaking monsreur du bois...",
    },
    {
        img: "images/blog-3.jpg",
        date: "12 Dec, 2022",
        title: "Lorem ipsum dolor sit amet.",
        desc: "You're only as good as your last collection, which is an enormous pressure. I think there is something about...",
    },
    {
        img: "images/blog-4.jpg",
        date: "12 Dec, 2022",
        title: "Lorem ipsum dolor sit amet.",
        desc: "You're only as good as your last collection, which is an enormous pressure. I think there is something about...",
    },
];

const demoData7 = [
    {
        src: "images/f-camera.png",
        brand: "Canon",
        title: "Canon EOS 3000D 18MP Digital SLR 18-55mm",
        star: "4",
        price: "33,590",
    },
    {
        src: "images/f-headphone.png",
        brand: "Boat",
        title: "boAt BassHeads 950v2 Wired Over Ear Headphones",
        star: "4.5",
        price: "1,999",
    },
    {
        src: "images/f-mobile.png",
        brand: "Samsung",
        title: "Samsung Galaxy S20 FE 5G 8GB,128GB (Cloud Lavender)",
        star: "4.5",
        price: "29,999",
    },
    {
        src: "images/f-speaker.png",
        brand: "ZEBRONICS",
        title: "ZEBRONICS Zeb-Action Wireless 10W Portable Speaker",
        star: "3.5",
        price: "1,299",
    },
    {
        src: "images/f-tab.png",
        brand: "Xiaomi",
        title: "Xiaomi Pad 5 Qualcomm Snapdragon 860 120Hz 6GB, 128GB",
        star: "4",
        price: "26,999",
    },
    {
        src: "images/f-watch.png",
        brand: "Fire-Boltt",
        title: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch 240x280 Pixel",
        star: "4.5",
        price: "1,799",
    },
];

const Home = () => {
    return (
        <>
            <HomeSectionOne />
            <HomeSectionTwo />
            <section className="featured-wrapper py-3 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured Collection
                            </h3>
                        </div>
                        {demoData7.map((item, i) => {
                            return <ProductCard key={i} item={item} />;
                        })}
                    </div>
                </div>
            </section>
            <section className="famous-wrapper py-3 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <Link className="famous-card bg-black">
                                <div className="famous-content">
                                    <h5 className="text-white">Big Screen</h5>
                                    <h6 className="text-white">
                                        Smart Watch Series 7
                                    </h6>
                                    <p className="text-white">
                                        From $399 or $16.62/mo. for 24 mo.*
                                    </p>
                                </div>
                                <img
                                    src="images/famous-watch.png"
                                    alt="famous"
                                />
                            </Link>
                        </div>
                        {(() => {
                            let tempArr = [];
                            for (let i = 0; i < 3; i++) {
                                let j = (
                                    <div className="col-3">
                                        <Link className="famous-card bg-white">
                                            <div className="famous-content">
                                                <h5>Big Screen</h5>
                                                <h6>Smart Watch Series 7</h6>
                                                <p>
                                                    From $399 or $16.62/mo. for
                                                    24 mo.*
                                                </p>
                                            </div>
                                            <img
                                                className="img-fluid"
                                                src="images/famous-watch.png"
                                                alt="famous"
                                            />
                                        </Link>
                                    </div>
                                );
                                tempArr.push(j);
                            }
                            return tempArr;
                        })()}
                    </div>
                </div>
            </section>
            <section className="speacial-wrapper py-3 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Special Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </section>
            <section className="populer-wrapper py-3 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our populer products
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div className="card"></div>
                            </div>
                            <div className="col-2">
                                <div className="card"></div>
                            </div>
                            {demoData7.map((item, i) => {
                                if (i <= 3)
                                    return <ProductCard key={i} item={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="marquee-wrapper py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="merquee-inner-wrapper bg-white p-3 card-wrapper">
                                <Marquee className="d-flex">
                                    {demoData5.map((item, i) => {
                                        return (
                                            <div key={i} className="mx-4 w-25">
                                                <img
                                                    src={item.src}
                                                    alt="brand"
                                                />
                                            </div>
                                        );
                                    })}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper py-2 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Latest Blogs
                            </h3>
                        </div>
                        {demoData6.map((item, i) => {
                            return <BlogCard key={i} item={item} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
