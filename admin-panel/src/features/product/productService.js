import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProducts = async () => {
    try {
        const response = await axios.get(`${base_url}product/`);
        return response.data;
    } catch (error) {
        return [];
    }
};
const getProduct = async (id) => {
    try {
        const response = await axios.get(`${base_url}product/${id}`);
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error?.message };
    }
};
const updateProduct = async (id, data) => {
    try {
        const response = await axios.put(
            `${base_url}product/${id}`,
            data,
            config
        );
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error?.message };
    }
};
const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${base_url}product/${id}`, config);
        return { ...response.data, success: true };
    } catch (error) {
        console.log(error);
        return { success: false, message: error?.message };
    }
};
const createProduct = async (product) => {
    try {
        const response = await axios.post(
            `${base_url}product/`,
            product,
            config
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return { success: false, message: error?.message };
    }
};

const productService = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
export default productService;
