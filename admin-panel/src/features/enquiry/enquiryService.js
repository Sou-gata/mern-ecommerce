import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getEnquiries = async () => {
    try {
        const response = await axios.get(`${base_url}enquiry/`, config);
        return { data: response.data, success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
const getEnquiry = async (id) => {
    try {
        const response = await axios.get(`${base_url}enquiry/${id}`, config);
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
const deleteEnquiry = async (id) => {
    try {
        const response = await axios.delete(`${base_url}enquiry/${id}`, config);
        return { ...response.data, success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const enquiryService = {
    getEnquiries,
    getEnquiry,
    deleteEnquiry,
};
export default enquiryService;
