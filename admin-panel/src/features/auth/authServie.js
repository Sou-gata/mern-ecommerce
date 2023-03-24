import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const login = async (userdata) => {
    try {
        const response = await axios.post(
            `${base_url}user/admin-login`,
            userdata
        );
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return { ...response.data, success: true };
    } catch (error) {
        localStorage.removeItem("user");
        return { success: false };
    }
};

const getOrders = async () => {
    const response = await axios.get(`${base_url}user/get-orders/`, config);
    return response.data;
};

const getOrder = async (id) => {
    const response = await axios.get(`${base_url}user/get-order/${id}`, config);
    return response.data;
};
const updateOrder = async (id, data) => {
    const response = await axios.put(
        `${base_url}user/update-order/${id}`,
        data,
        config
    );
    return response.data;
};

const authService = {
    login,
    getOrders,
    getOrder,
    updateOrder,
};
export default authService;
