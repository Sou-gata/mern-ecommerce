import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const demoData = {
    src: "images/f-mobile.png",
    brand: "Samsung",
    title: "Samsung Galaxy S20 FE 5G 8GB,128GB (Cloud Lavender)",
    star: "4.5",
    price: "29,999",
    description:
        "5G Ready powered by Qualcomm Snapdragon 865 Octa-Core processor, 8GB RAM, 128GB internal memory expandable up to 1TB, Android 13.0 operating system and dual SIM",
};

const StoreRight = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <div className="col-9">
                <div className="filter-sort-grid mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">
                            <p className="mb-0 text-nowrap">Short By:</p>
                            <select
                                name=""
                                className="form-control form-select"
                                id=""
                            >
                                <option value="manual">Featured</option>
                                <option value="best-selling" selected={true}>
                                    Best Selling
                                </option>
                                <option value="title-ascending">
                                    Alphabetically A-Z
                                </option>
                                <option value="title-descending">
                                    Alphabetically Z-A
                                </option>
                                <option value="price-ascending">
                                    Price low to high
                                </option>
                                <option value="price-descending">
                                    Price high to low
                                </option>
                                <option value="created-ascending">
                                    Date old to new
                                </option>
                                <option value="created-descending">
                                    Date new to old
                                </option>
                            </select>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="total-products mb-0">21 Products</p>
                            <div className="d-flex gap-10 align-items-center grid">
                                <img
                                    onClick={() => setGrid(3)}
                                    src="images/gr4.svg"
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(4)}
                                    src="images/gr3.svg"
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(6)}
                                    src="images/gr2.svg"
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(12)}
                                    src="images/gr.svg"
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list pb-5">
                    <div className="d-flex gap-10 flex-wrap">
                        <ProductCard grid={grid} item={demoData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoreRight;
