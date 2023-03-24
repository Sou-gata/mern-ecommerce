import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerService from "./customerService";

export const getUsers = createAsyncThunk(
    "customer/get-customers",
    async (thunkAPI) => {
        try {
            return await customerService.getUsers();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const blockUser = createAsyncThunk(
    "customer/block-customer",
    async (id, thunkAPI) => {
        try {
            return await customerService.blockUser(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const unblockUser = createAsyncThunk(
    "customer/unblock-customer",
    async (id, thunkAPI) => {
        try {
            return await customerService.unblockUser(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    customers: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    customer: {},
    message: "",
};

export const customerSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.customers = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(blockUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blockUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.customer = action.payload;
            })
            .addCase(blockUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(unblockUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(unblockUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.customer = action.payload;
            })
            .addCase(unblockUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default customerSlice.reducer;
