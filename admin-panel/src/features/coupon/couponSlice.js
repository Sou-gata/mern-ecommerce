import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import couponService from "./couponService";

const initialState = {
    coupons: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const getCoupons = createAsyncThunk(
    "coupons/get-coupons",
    async (thunkAPI) => {
        try {
            return await couponService.getCoupons();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getCoupon = createAsyncThunk(
    "coupons/get-coupon",
    async (id, thunkAPI) => {
        try {
            return await couponService.getCoupon(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const createCoupon = createAsyncThunk(
    "coupon/create-coupon",
    async (couponData, thunkAPI) => {
        try {
            return await couponService.createCoupon(couponData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const updateCoupon = createAsyncThunk(
    "coupon/update-coupon",
    async (data, thunkAPI) => {
        try {
            return await couponService.updateCoupon(data.id, data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const deleteCoupon = createAsyncThunk(
    "coupon/delete-coupon",
    async (id, thunkAPI) => {
        try {
            return await couponService.deleteCoupon(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const couponSlice = createSlice({
    name: "coupons",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoupons.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCoupons.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.coupons = action.payload;
                state.message = "Success";
            })
            .addCase(getCoupons.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.message;
            })
            .addCase(createCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.coupons = action.payload;
                state.message = "Success";
            })
            .addCase(createCoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.message;
            });
    },
});

export default couponSlice.reducer;
