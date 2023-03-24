const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            require: true,
        },
        images: {
            type: [
                {
                    url: String,
                    public_id: String,
                },
            ],
        },
        tags: {
            type: String,
            required: true,
        },
        rating: [
            {
                stars: Number,
                comment: String,
                postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            },
        ],
        brand: {
            type: String,
            required: true,
        },
        sold: {
            type: Number,
            default: 0,
            select: false,
        },
        totalRating: {
            type: String,
            default: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
