import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pCategoryService from "./pcategoryService";

export const getCategories = createAsyncThunk(
    "category/get-categories",
    async (thunkAPI) => {
        try {
            return await pCategoryService.getProductCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getCategory = createAsyncThunk(
    "category/get-category",
    async (id, thunkAPI) => {
        try {
            return await pCategoryService.getCategory(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const createCategory = createAsyncThunk(
    "category/create-category",
    async (categoryData, thunkAPI) => {
        try {
            return await pCategoryService.createCategory(categoryData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const updatCategory = createAsyncThunk(
    "category/update-category",
    async (data, thunkAPI) => {
        try {
            return await pCategoryService.updateCategory(data.id, data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const deleteCategory = createAsyncThunk(
    "category/delete-category",
    async (id, thunkAPI) => {
        try {
            return await pCategoryService.deleteCategory(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    pCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    categoryTitle: {},
    deletedCategory: {},
};

export const pCategorySlice = createSlice({
    name: "pCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.pCategories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.pCategories = action.payload;
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.categoryTitle = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updatCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updatCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.pCategories = action.payload;
            })
            .addCase(updatCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedCategory = action.payload;
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default pCategorySlice.reducer;
