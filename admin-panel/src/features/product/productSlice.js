import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk(
    "product/get-products",
    async (thunkAPI) => {
        try {
            return await productService.getProducts();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getProduct = createAsyncThunk(
    "product/get-product",
    async (id, thunkAPI) => {
        try {
            return await productService.getProduct(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const updateProduct = createAsyncThunk(
    "product/update-product",
    async (data, thunkAPI) => {
        try {
            return await productService.updateProduct(data.id, data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const deleteProduct = createAsyncThunk(
    "product/delete-product",
    async (id, thunkAPI) => {
        try {
            return await productService.deleteProduct(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const createProduct = createAsyncThunk(
    "product/create-product",
    async (productData, thunkAPI) => {
        try {
            return await productService.createProduct(productData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetProduct = createAsyncThunk("product/reset-products", () => {
    return { success: false };
});

const initialState = {
    products: [],
    createProduct: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    product: {},
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createProduct = action.payload;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.product = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.product = action.payload;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.product = action.payload;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createProduct = action.payload;
            });
    },
});

export default productsSlice.reducer;
