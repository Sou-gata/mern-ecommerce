import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uploadService from "./uploadService";

export const uploadImg = createAsyncThunk(
    "upload/images",
    async (data, thunkAPI) => {
        try {
            const formData = new FormData();
            for (let i = 0; i < data.length; i++) {
                formData.append("images", data[i]);
            }
            return await uploadService.uploadImg(formData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteImg = createAsyncThunk(
    "delete/images",
    async (data, thunkAPI) => {
        try {
            return await uploadService.deleteImg(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetImages = createAsyncThunk("upload/reset-product", () => {
    return [];
});

const initialState = {
    images: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const imgUploagSlice = createSlice({
    name: "images",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(uploadImg.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(uploadImg.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.images = action.payload;
            })
            .addCase(uploadImg.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteImg.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteImg.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.images = action.payload;
            })
            .addCase(deleteImg.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = "failed";
            })
            .addCase(resetImages.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.images = action.payload;
            });
    },
});

export default imgUploagSlice.reducer;
