const BCategory = require("../models/blogCatModels");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await BCategory.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error.message);
    }
});

const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedCategory = await BCategory.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error.message);
    }
});

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteCategory = await BCategory.findByIdAndDelete(id);
        res.json(deleteCategory);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaCategory = await BCategory.findById(id);
        res.json(getaCategory);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getAllCategory = asyncHandler(async (req, res) => {
    try {
        const getallCategory = await BCategory.find();
        res.json(getallCategory);
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategory,
};
