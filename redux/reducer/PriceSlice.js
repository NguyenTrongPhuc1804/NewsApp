import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../service/baseService";

const initialState = {
  priceGold: [],
  priceCoin: [],
};

export const PriceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPriceGold.fulfilled, (state, action) => {
      state.priceGold = action.payload;
    });
    builder.addCase(getPriceGCoin.fulfilled, (state, action) => {
      state.priceCoin = action.payload;
    });
  },
});
export const getPriceGold = createAsyncThunk("/rice/getPriceGold", async () => {
  try {
    const { data } = await api.get(`/get-gold`);
    return data;
  } catch (err) {
    console.log(err, "error");
  }
});
export const getPriceGCoin = createAsyncThunk(
  "/rice/getPriceGCoin",
  async () => {
    try {
      const { data } = await api.get(`/get-coin`);
      return data;
    } catch (err) {
      console.log(err, "error");
    }
  }
);
export const { reducerName } = PriceSlice.actions;

export default PriceSlice.reducer;
