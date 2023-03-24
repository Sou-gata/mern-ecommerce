import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getCoupons = async () => {
    try {
        const response = await axios.get(`${base_url}coupon/`, config);
        return response.data;
    } catch (error) {
        return { success: false, message: error?.message };
    }
};
const getCoupon = async (id) => {
    try {
        const response = await axios.get(`${base_url}coupon/${id}`, config);
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error?.message };
    }
};
const createCoupon = async (coupon) => {
    try {
        const response = await axios.post(`${base_url}coupon/`, coupon, config);
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error?.message };
    }
};
const updateCoupon = async (id, data) => {
    try {
        const response = await axios.put(
            `${base_url}coupon/${id}`,
            data,
            config
        );
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error?.message };
    }
};
const deleteCoupon = async (id) => {
    try {
        const response = await axios.delete(`${base_url}coupon/${id}`, config);
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error?.message };
    }
};

const couponService = {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon,
};

export default couponService;
