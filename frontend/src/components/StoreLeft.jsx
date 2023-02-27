import React from "react";
import ReactStars from "react-rating-stars-component";

const createRandomColor = () => {
    let colArr = [];
    for (let i = 0; i < 3; i++) {
        let single = Math.floor(Math.random() * 256).toString();
        colArr.push(single);
    }
    let r = colArr[0];
    let g = colArr[1];
    let b = colArr[2];
    let color = `rgb(${r},${g},${b})`;
    return color;
};

const demoData = ["Headphone", "Laptop", "Mobile", "Speaker", "Tablet", "Wire"];
const demoData2 = [
    {
        src: "images/f-watch.png",
        star: 4,
        price: "₹ 1,799",
        title: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch 240x280 Pixel",
    },
    {
        src: "images/f-mobile.png",
        star: 4.5,
        price: "₹ 29,999",
        title: "Samsung Galaxy S20 FE 5G 8GB,128GB (Cloud Lavender)",
    },
];

const StoreLeft = () => {
    return (
        <>
            <div className="col-3">
                <div className="filter-card mb-2">
                    <h3 className="filter-title">Shop By categories</h3>
                    <div>
                        <ul className="ps-0">
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
                <div className="filter-card mb-2">
                    <h3 className="filter-title">Filter By</h3>
                    <div>
                        <h5 className="sub-title">Avalilablity</h5>
                        <div>
                            <div className="from-cheak">
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    value=""
                                    id="inStock"
                                />
                                <label
                                    htmlFor="inStock"
                                    className="form-check-label"
                                >
                                    In Stock (12)
                                </label>
                            </div>
                            <div className="from-cheak">
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    value=""
                                    id="outOfStock"
                                />
                                <label
                                    htmlFor="outOfStock"
                                    className="form-check-label m-0"
                                >
                                    Out Of Stock (0)
                                </label>
                            </div>
                        </div>
                        <h5 className="sub-title">Price</h5>
                        <div className="pricing d-flex align-items-center gap-10">
                            <div className="form-floating">
                                <p className="mb-0">₹</p>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="minPrice"
                                    placeholder="From"
                                />
                                <label htmlFor="minPrice">From</label>
                            </div>
                            <div className="form-floating">
                                <p className="mb-0">₹</p>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="maxPrice"
                                    placeholder="To"
                                />
                                <label htmlFor="maxPrice">To</label>
                            </div>
                        </div>
                        <h5 className="sub-title">Colours</h5>
                        <div className="colors">
                            <ul>
                                {(() => {
                                    let ele = [];
                                    for (let i = 0; i < 40; i++) {
                                        let color = createRandomColor();
                                        let li = (
                                            <li
                                                key={i}
                                                style={{
                                                    backgroundColor: color,
                                                }}
                                            ></li>
                                        );
                                        ele.push(li);
                                    }
                                    return ele;
                                })()}
                            </ul>
                        </div>
                        <h5 className="sub-title">Size</h5>
                        <div className="size">
                            <div className="from-cheak">
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    value=""
                                    id="s"
                                />
                                <label htmlFor="s" className="form-check-label">
                                    S (12)
                                </label>
                            </div>
                            <div className="from-cheak">
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    value=""
                                    id="M"
                                />
                                <label htmlFor="M" className="form-check-label">
                                    M (12)
                                </label>
                            </div>
                            <div className="from-cheak">
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    value=""
                                    id="L"
                                />
                                <label htmlFor="L" className="form-check-label">
                                    L (12)
                                </label>
                            </div>
                            <div className="from-cheak">
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    value=""
                                    id="XL"
                                />
                                <label
                                    htmlFor="XL"
                                    className="form-check-label"
                                >
                                    XL (12)
                                </label>
                            </div>
                            <div className="from-cheak">
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    value=""
                                    id="XXL"
                                />
                                <label
                                    htmlFor="XXL"
                                    className="form-check-label"
                                >
                                    XXL (12)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-card mb-2">
                    <h3 className="filter-title">Product Tags</h3>
                    <div>
                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                            {demoData.map((item, i) => {
                                return (
                                    <span
                                        key={i}
                                        className="badge  text-secondary rounded-3 py-2 px-3"
                                    >
                                        {item}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="filter-card mb-2">
                    <h3 className="filter-title">Random Products</h3>
                    {demoData2.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="random-products d-flex py-2"
                            >
                                <div className="w-25">
                                    <img
                                        src={item.src}
                                        className="img-fluid"
                                        alt="watch"
                                    />
                                </div>
                                <div className="w-75">
                                    <h5>{item.title}</h5>
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        value={item.star}
                                        isHalf={true}
                                        edit={false}
                                    />
                                    <b>{item.price}</b>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default StoreLeft;
