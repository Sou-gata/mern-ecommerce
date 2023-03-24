import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProductCategories = async () => {
    try {
        const response = await axios.get(`${base_url}category/`);
        return response.data;
    } catch (error) {}
};
const createCategory = async (category) => {
    try {
        const response = await axios.post(
            `${base_url}category/`,
            category,
            config
        );
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
const getCategory = async (id) => {
    try {
        const response = await axios.get(`${base_url}category/${id}`, config);
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
const updateCategory = async (id, data) => {
    try {
        const response = await axios.put(
            `${base_url}category/${id}`,
            data,
            config
        );
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(
            `${base_url}category/${id}`,
            config
        );
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const pCategoryService = {
    getProductCategories,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
};
export default pCategoryService;
