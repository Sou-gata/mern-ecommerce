const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");
const cloudinaryUploadImg = require("../utils/cloudinary");
const fs = require("fs");

const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateBlog);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getBlog = await Blog.findById(id)
            .populate("likes")
            .populate("dislikes");
        await Blog.findByIdAndUpdate(
            id,
            { $inc: { numView: 1 } },
            { new: true }
        );
        res.json(getBlog);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const getBlogs = await Blog.find();
        res.json(getBlogs);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteBlog = await Blog.findByIdAndDelete(id);
        res.json(deleteBlog);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDbId(blogId);
    try {
        const blog = await Blog.findById(blogId); //find the wanted blog
        const loginUserId = req?.user?._id; //find the login user
        const isLiked = blog?.isLiked; //find if user liked
        const alreadyDisliked = blog?.dislikes?.find(
            (userId) => userId?.toString() === loginUserId?.toString()
        );
        if (alreadyDisliked) {
            const updated = await Blog.findByIdAndUpdate(
                blogId,
                {
                    $pull: { dislikes: loginUserId },
                    isDisliked: false,
                },
                { new: true }
            );
            res.json(updated);
        }
        if (isLiked) {
            const updated = await Blog.findByIdAndUpdate(
                blogId,
                {
                    $pull: { likes: loginUserId },
                    isLiked: false,
                },
                { new: true }
            );
            res.json(updated);
        } else {
            const updated = await Blog.findByIdAndUpdate(
                blogId,
                {
                    $push: { likes: loginUserId },
                    isLiked: true,
                },
                { new: true }
            );
            res.json(updated);
        }
    } catch (error) {
        throw new Error(error?.message);
    }
});

const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDbId(blogId);
    try {
        const blog = await Blog.findById(blogId); //find the wanted blog
        const loginUserId = req?.user?._id; //find the login user
        const isDisliked = blog?.isDisliked; //find if user disliked
        const alreadyLiked = blog?.likes?.find(
            (userId) => userId?.toString() === loginUserId?.toString()
        );
        if (alreadyLiked) {
            const updated = await Blog.findByIdAndUpdate(
                blogId,
                {
                    $pull: { likes: loginUserId },
                    isLiked: false,
                },
                { new: true }
            );
            res.json(updated);
        }
        if (isDisliked) {
            const updated = await Blog.findByIdAndUpdate(
                blogId,
                {
                    $pull: { dislikes: loginUserId },
                    isDisliked: false,
                },
                { new: true }
            );
            res.json(updated);
        } else {
            const updated = await Blog.findByIdAndUpdate(
                blogId,
                {
                    $push: { dislikes: loginUserId },
                    isDisliked: true,
                },
                { new: true }
            );
            res.json(updated);
        }
    } catch (error) {
        throw new Error(error?.message);
    }
});

const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
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
        const findBlog = await Blog.findByIdAndUpdate(id, {
            images: urls.map(
                (file) => {
                    return file;
                },
                { new: true }
            ),
        });
        res.json(findBlog);
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    likeBlog,
    dislikeBlog,
    uploadImages,
};
