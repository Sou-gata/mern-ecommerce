import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bCategoryService from "./bCategoryService";

export const getBlogCategories = createAsyncThunk(
    "bcategories/get-bcategories",
    async (thunkAPI) => {
        try {
            return await bCategoryService.getBlogCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    bcategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const blogCategorySlice = createSlice({
    name: "bcategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBlogCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.bcategories = action.payload;
            })
            .addCase(getBlogCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default blogCategorySlice.reducer;
