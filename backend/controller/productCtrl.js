const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongoDbId");
const {
    cloudinaryUploadImg,
    cloudinaryDeleteImg,
} = require("../utils/cloudinary");
const fs = require("fs");

const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req?.body?.title) {
            req.body.slug = slugify(req?.body?.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        //filter
        const quaryObj = { ...req.query };
        const excludeFilds = ["page", "short", "limit", "filds"];
        excludeFilds.forEach((element) => delete quaryObj[element]);
        let queryString = JSON.stringify(quaryObj);
        queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        let query = Product.find(JSON.parse(queryString));

        //short
        if (req.query.sort) {
            const sortBy = req.query.sort?.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query.sort("-createdAt");
        }

        //limit fild
        if (req.query.fields) {
            const fields = req.query.fields?.split(",").join(" ");
            query = query.select(fields);
        } else {
            query.select("-__v");
        }

        //pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).lomit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) {
                throw new Error("This page is not Exist");
            }
        }

        const product = await query;
        res.json(product);
    } catch (error) {
        throw new Error(error.mesage);
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params;
    validateMongoDbId(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const update = await Product.findOneAndUpdate({ id }, req.body, {
            new: true,
        });
        res.json(update);
    } catch (error) {
        throw new Error(error.message);
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params;
    validateMongoDbId(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const deleteAProduct = await Product.findOneAndDelete(id);
        res.json(deleteAProduct);
    } catch (error) {
        throw new Error(error.message);
    }
});

const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { porId } = req.body;
    validateMongoDbId(_id);
    validateMongoDbId(prodId);
    try {
        const user = await User.findById(_id);
        const alreadyExist = user.wishlist.find((id) => id.toString() == porId);
        if (alreadyExist) {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $pull: { wishlist: porId },
                },
                { new: true }
            );
            res.json(user);
        } else {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $push: { wishlist: porId },
                },
                { new: true }
            );
            res.json(user);
        }
    } catch (error) {
        throw new Error(error.message);
    }
});

const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    const { star, prodId, comment } = req.body;

    const product = await Product.findById(_id);
    let alreadyRated = product.ratings.find(
        (userId) => userId.postedby.toString() == _id.toString()
    );
    if (alreadyRated) {
        const updateRating = await Product.updateOne(
            {
                rating: {
                    $elemMatch: alreadyRated,
                },
            },
            {
                $set: { "rating.$.star": star, "rating.$.comment": comment },
            },
            {
                new: true,
            }
        );
        res.json(updateRating);
    } else {
        try {
            const rateProduct = await Product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            star: star,
                            postedby: _id,
                        },
                    },
                },
                { new: true }
            );
            const getAllrating = await Product.findById(prodId);
            let totalRating = getAllrating.rating?.length;
            let ratingSum = getAllrating.rating
                .map((item) => item.star)
                .reduce((prev, curr) => prev + curr, 0);
            let actualRating = Math.round(ratingSum / totalRating);
            const product = await Product.findByIdAndUpdate(
                prodId,
                {
                    totalRating: actualRating,
                },
                { new: true }
            );
            res.json(product);
        } catch (error) {
            throw new Error(error.message);
        }
    }
});

const uploadImages = asyncHandler(async (req, res) => {
    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");
        let urls = [];
        const files = req.files;
        for (let file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        const images = urls.map(
            (file) => {
                return file;
            },
            { new: true }
        );
        res.json(images);
    } catch (error) {
        throw new Error(error.message);
    }
});

const deleteImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteImg = cloudinaryDeleteImg(id, "images");
        res.json({ ...deleteImg, message: "Deleted" });
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = {
    createProduct,
    getaProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages,
};
