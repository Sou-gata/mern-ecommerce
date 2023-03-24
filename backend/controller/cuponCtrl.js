const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

const createCoupon = asyncHandler(async (req, res) => {
    try {
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getAllCoupon = asyncHandler(async (req, res) => {
    try {
        const allCoupon = await Coupon.find();
        res.json(allCoupon);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const coupon = await Coupon.findById(id);
        res.json(coupon);
    } catch (error) {
        throw new Error(error.message);
    }
});

const updateCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateaCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateaCoupon);
    } catch (error) {
        throw new Error(error.message);
    }
});

const deleteCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteaCoupon = await Coupon.findByIdAndDelete(id);
        res.json(deleteaCoupon);
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = {
    createCoupon,
    getAllCoupon,
    getCoupon,
    updateCoupon,
    deleteCoupon,
};
