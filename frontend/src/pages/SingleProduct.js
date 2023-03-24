import React, { useState } from "react";
import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdOutlineLocalShipping, MdOutlineComputer } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { TfiRulerAlt } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import Container from "../components/Container";

const demoData7 = [
    {
        src: "/images/f-camera.png",
        brand: "Canon",
        title: "Canon EOS 3000D 18MP Digital SLR 18-55mm",
        star: "4",
        price: "33,590",
    },
    {
        src: "/images/f-headphone.png",
        brand: "Boat",
        title: "boAt BassHeads 950v2 Wired Over Ear Headphones",
        star: "4.5",
        price: "1,999",
    },
    {
        src: "/images/f-mobile.png",
        brand: "Samsung",
        title: "Samsung Galaxy S20 FE 5G 8GB,128GB (Cloud Lavender)",
        star: "4.5",
        price: "29,999",
    },
    {
        src: "/images/f-speaker.png",
        brand: "ZEBRONICS",
        title: "ZEBRONICS Zeb-Action Wireless 10W Portable Speaker",
        star: "3.5",
        price: "1,299",
    },
    {
        src: "/images/f-tab.png",
        brand: "Xiaomi",
        title: "Xiaomi Pad 5 Qualcomm Snapdragon 860 120Hz 6GB, 128GB",
        star: "4",
        price: "26,999",
    },
    {
        src: "/images/f-watch.png",
        brand: "Fire-Boltt",
        title: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch 240x280 Pixel",
        star: "4.5",
        price: "1,799",
    },
];

const SingleProduct = () => {
    const [orderProduct] = useState(true);
    const [mainImage, setMainImage] = useState("/images/sp-1.jpg");
    const [count, setCount] = useState(1);
    return (
        <>
            <Meta title="Product Name" />
            <BradCrumb title="Product Name" />
            <Container class1="main-product-wrapper py-3 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div className="main-image">
                                <img src={mainImage} alt="1" />
                            </div>
                            <div className="row">
                                <div className="row-images">
                                    <div className="col-3">
                                        <div
                                            className="img-container"
                                            onClick={() =>
                                                setMainImage("/images/sp-1.jpg")
                                            }
                                        >
                                            <img
                                                src="/images/sp-1.jpg"
                                                alt="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div
                                            className="img-container"
                                            onClick={() =>
                                                setMainImage("/images/sp-2.jpg")
                                            }
                                        >
                                            <img
                                                src="/images/sp-2.jpg"
                                                alt="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div
                                            className="img-container"
                                            onClick={() =>
                                                setMainImage("/images/sp-3.jpg")
                                            }
                                        >
                                            <img
                                                src="/images/sp-3.jpg"
                                                alt="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div
                                            className="img-container last"
                                            onClick={() =>
                                                setMainImage("/images/sp-4.jpg")
                                            }
                                        >
                                            <img
                                                src="/images/sp-4.jpg"
                                                alt="1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">
                                    Samsung Galaxy S20 FE 5G (Cloud Lavender,
                                    8GB RAM, 128GB Storage)
                                </h3>
                            </div>
                            <div className="py-3 border-bottom">
                                <p className="price">₹ 34,999</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        value={4.7}
                                        isHalf={true}
                                        edit={false}
                                    />
                                    <p className="mb-0 write-review">
                                        ( 2 Reviews )
                                    </p>
                                </div>
                                <a className="write-review" href="#review">
                                    Write a Review
                                </a>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className="product-heading">Type :</h3>
                                    <p className="product-data">Mobile Phone</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className="product-heading">Brand :</h3>
                                    <p className="product-data">Samsung</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className="product-heading">
                                        Categories :
                                    </h3>
                                    <p className="product-data">
                                        Smart Phone, Mobile Phone
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className="product-heading">Tags :</h3>
                                    <p className="product-data">
                                        Mobile, Phone, Samsung, Smart Phone,
                                        Dual Sim
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className="product-heading">
                                        Availablity :
                                    </h3>
                                    <p className="product-data">In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column py-2">
                                    <h3 className="product-heading">Size :</h3>
                                    <div className="d-flex flex-wrap gap-15 sizes">
                                        <span className="badge">S</span>
                                        <span className="badge active">M</span>
                                        <span className="badge">XL</span>
                                        <span className="badge">XXL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column py-2">
                                    <h3 className="product-heading">
                                        Colour :
                                    </h3>
                                    <div className="colors">
                                        <Color count={4} />
                                    </div>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className="product-heading">
                                        Quantity :
                                    </h3>
                                    <div className="quantity">
                                        <button
                                            onClick={() => {
                                                let temp = count - 1;
                                                temp = Math.max(1, temp);
                                                setCount(temp);
                                            }}
                                        >
                                            -
                                        </button>
                                        <p>{count}</p>
                                        <button
                                            onClick={() => {
                                                let temp = count + 1;
                                                temp = Math.min(temp, 10);
                                                setCount(temp);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="ms-3 d-flex align-items-center gap-15">
                                        <button className="button btn">
                                            Add to Cart
                                        </button>
                                        <button className="btn button buy-now">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center compare-cart">
                                    <div>
                                        <img
                                            src="/images/prodcompare.svg"
                                            alt="compare"
                                        />
                                        <p>Add to compare</p>
                                    </div>
                                    <div>
                                        <img
                                            src="/images/wish.svg"
                                            alt="wish"
                                        />
                                        <p>Add to Wishlist</p>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <Accordion className="accordion">
                                        <AccordionSummary
                                            expandIcon={<RiArrowDownSLine />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <h3 className="product-heading ">
                                                <MdOutlineLocalShipping className="me-2 asColor" />
                                                Shipping & Returns
                                            </h3>
                                        </AccordionSummary>
                                        <AccordionDetails className="bg-accordion">
                                            <p className="product-data">
                                                Free shipping and return
                                                available on all orders. <br />
                                                We ship all Indian orders within{" "}
                                                <b>5-7 buisness days.</b>
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordion">
                                        <AccordionSummary
                                            expandIcon={<RiArrowDownSLine />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <h3 className="product-heading ">
                                                <MdOutlineComputer className="me-2 asColor" />
                                                Materials
                                            </h3>
                                        </AccordionSummary>
                                        <AccordionDetails className="bg-accordion">
                                            <p className="product-data">
                                                The back of the phone is
                                                plastic, but the frame is made
                                                of aluminum
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordion">
                                        <AccordionSummary
                                            expandIcon={<RiArrowDownSLine />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <h3 className="product-heading ">
                                                <TfiRulerAlt className="me-2 asColor" />
                                                Dimensions
                                            </h3>
                                        </AccordionSummary>
                                        <AccordionDetails className="bg-accordion">
                                            <p className="product-data">
                                                159.8 x 74.5 x 8.4 mm (6.29 x
                                                2.93 x 0.33 in)
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordion">
                                        <AccordionSummary
                                            expandIcon={<RiArrowDownSLine />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <h3 className="product-heading ">
                                                <AiOutlineHeart className="me-2 asColor" />
                                                Care Instructions
                                            </h3>
                                        </AccordionSummary>
                                        <AccordionDetails className="bg-accordion">
                                            <ul className="product-data">
                                                <li>Disinfecting wipes</li>
                                                <li>
                                                    70% isopropyl alcohol-based
                                                    wipes
                                                </li>
                                                <li>
                                                    Soft cloth suitable for a
                                                    lens or eyewear
                                                </li>
                                                <li>
                                                    Don’t saturate the soft
                                                    cloth or cotton ball,
                                                    instead blot any excess
                                                    liquid.
                                                </li>
                                                <li>
                                                    Steer clear of any ports,
                                                    microphones, speakers, and
                                                    other areas that liquid can
                                                    seep into.
                                                </li>
                                                <li>
                                                    Don’t spray, pour, or dip
                                                    your device directly into
                                                    any liquids. Instead, use a
                                                    small corner of a cloth to
                                                    apply the product.
                                                </li>
                                                <li>
                                                    Apply gentle strokes across
                                                    the device’s surface. Don’t
                                                    use excessive force.
                                                </li>
                                                <li>
                                                    Avoid compressed air since
                                                    it can damage the device’s
                                                    surface.
                                                </li>
                                                <li>
                                                    Let the device air-dry
                                                    completely before using.
                                                </li>
                                            </ul>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div
                                    className="d-flex align-items-center gap-10 px-3 py-2 product-share"
                                    onClick={() => {
                                        let url = window.location.href;
                                        const shareData = {
                                            title: "Product",
                                            text: url,
                                            url,
                                        };
                                        navigator.clipboard.writeText(url);
                                        navigator.share(shareData);
                                    }}
                                >
                                    <FiLink className="asColor" />
                                    <h3 className="product-heading">Share</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-3 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <p className="heading">Description</p>
                        <div className="bg-white p-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. In, minus at. Doloribus
                                obcaecati a accusamus ex accusantium quisquam
                                omnis impedit tempore modi placeat enim optio,
                                rem unde! Consequuntur, hic ut!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper pb-3 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <p id="review" className="heading">
                            Reviews
                        </p>
                        <div className="review-inner-rapper">
                            <div className="review-head pb-3">
                                <div>
                                    <h4 className="mb-2">Customer Reviewes</h4>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={35}
                                            value={4.7}
                                            isHalf={true}
                                            edit={false}
                                        />
                                        <p className="mb-0">
                                            Based on 2 Reviews
                                        </p>
                                    </div>
                                </div>
                                {orderProduct && (
                                    <div>
                                        <a
                                            className="text-dark text-decoration-underline"
                                            href="/product/id"
                                        >
                                            Write a Review
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="review-form py-4">
                                <h4 className="mb-4">Write a review</h4>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-15"
                                >
                                    <div>
                                        <p>Title</p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                        />
                                    </div>
                                    <div>
                                        <p>Rating </p>
                                        <ReactStars
                                            count={5}
                                            size={30}
                                            isHalf={true}
                                            edit={true}
                                        />
                                    </div>
                                    <div>
                                        <p>Your Review</p>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="4"
                                            placeholder="Your Review"
                                            className="w-100 form-control"
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            className="button btn"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Submit Review
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="reviews">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h5 className="mb-0">Sougata</h5>
                                        <ReactStars
                                            count={5}
                                            size={30}
                                            isHalf={true}
                                            value={5}
                                            edit={false}
                                        />
                                    </div>
                                    <h6>Any title of review</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aliquam minima, libero
                                        porro atque explicabo a doloremque ex
                                        totam maiores amet sed non suscipit eius
                                        labore soluta adipisci id exercitationem
                                        dolore!
                                    </p>
                                </div>
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h5 className="mb-0">Sougata</h5>
                                        <ReactStars
                                            count={5}
                                            size={30}
                                            isHalf={true}
                                            value={5}
                                            edit={false}
                                        />
                                    </div>
                                    <h6>Any title of review</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aliquam minima, libero
                                        porro atque explicabo a doloremque ex
                                        totam maiores amet sed non suscipit eius
                                        labore soluta adipisci id exercitationem
                                        dolore!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="populer-wrapper py-3 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our populer products
                        </h3>
                    </div>
                    <div className="row">
                        {demoData7.map((item, i) => {
                            return <ProductCard key={i} item={item} />;
                        })}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;
