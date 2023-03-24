import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getUsers = async () => {
    try {
        const response = await axios.get(`${base_url}user/all-users`);
        return response.data;
    } catch (error) {}
};
const blockUser = async (id) => {
    try {
        const response = await axios.put(
            `${base_url}user/block-user/${id}`,
            {},
            config
        );
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
const unblockUser = async (id) => {
    try {
        const response = await axios.put(
            `${base_url}user/unblock-user/${id}`,
            {},
            config
        );
        return { ...response.data, success: true };
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message };
    }
};

const customerService = {
    getUsers,
    blockUser,
    unblockUser,
};
export default customerService;
