const {
    cloudinaryUploadImg,
    cloudinaryDeleteImg,
} = require("../utils/cloudinary");
const fs = require("fs");
const asyncHandler = require("express-async-handler");

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
    const data = req.body;
    const images = data.images;
    try {
        const deleteImg = cloudinaryDeleteImg(id, "images");
        const filteredData = images.filter((item) => item.public_id !== id);
        res.json(filteredData);
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = {
    uploadImages,
    deleteImages,
};
