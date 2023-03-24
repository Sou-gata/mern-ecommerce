import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";

export const getEnquiries = createAsyncThunk(
    "enquiry/get-enqiries",
    async (thunkAPI) => {
        try {
            return await enquiryService.getEnquiries();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getEnquiry = createAsyncThunk(
    "enquiry/get-enqiry",
    async (id, thunkAPI) => {
        try {
            return await enquiryService.getEnquiry(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const deleteEnquiry = createAsyncThunk(
    "enquiry/delete-enqiry",
    async (id, thunkAPI) => {
        try {
            return await enquiryService.deleteEnquiry(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    enquiries: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    enquiry: {},
};

export const enquirySlice = createSlice({
    name: "enquiries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEnquiries.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEnquiries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.enquiries = action.payload;
            })
            .addCase(getEnquiries.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getEnquiry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEnquiry.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.enquiry = action.payload;
            })
            .addCase(getEnquiry.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteEnquiry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteEnquiry.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.enquiry = action.payload;
            })
            .addCase(deleteEnquiry.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default enquirySlice.reducer;
