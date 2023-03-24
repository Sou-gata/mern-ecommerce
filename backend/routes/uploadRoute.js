const express = require("express");
const { isAdmin, authMiddleware } = require("../middleware/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middleware/uploadImages");
const { uploadImages, deleteImages } = require("../controller/uploadCtrl");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 10),
    productImgResize,
    uploadImages
);
router.post("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
